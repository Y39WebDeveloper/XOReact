import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { calcBestMove, calcWinner } from "../Helpers/calcSquars";
import { ModalContext } from "./ModalContext";

const GameContext = createContext()

const GameState = (props) => {

    const { showModal, setModalMode, hideModal } = useContext(ModalContext)

    const [screen, setScreen] = useState('start')

    const [activeUser, setActiveUser] = useState('x')
    const [playMode, setPlayMode] = useState('user')

    const [squars, setSquars] = useState(new Array(9).fill(''))
    const [xnext, setXnext] = useState(false)
    
    const [winner, setWinner] = useState(null)
    const [winnerLine, setWinnerLine] = useState(null)

    const [ties, setTies] = useState({x: 0, o: 0})


    const changePlayMode = (mode) => {
        setPlayMode(mode)
        setScreen('game')
    }

    useEffect(() => {
        checkNoWinner()
        const currentUser = xnext ? 'o' : 'x'
        if(playMode === 'cpu' && currentUser !== activeUser && !winner){
            cpuNextMove(squars)
        }
    },[xnext, winner, screen])

    const handleSquareClick = (index) => {
        if(squars[index] || winner){
            return;
        }
        const currentUser = xnext ? 'o' : 'x'
        if(playMode === 'cpu' && currentUser !== activeUser){
            return
        }

        let ns = [...squars]
        ns[index] = !xnext ? 'x' : 'o'
        setSquars(ns)
        setXnext(!xnext)

        checkWinner(ns)


    }

    
    const checkWinner = (ns) => {
        const isWinner = calcWinner(ns)
        if(isWinner){
            setWinner(isWinner.winner)
            setWinnerLine(isWinner.lines)
            const ti = {...ties}
            ti[isWinner.winner] += 1;
            setTies(ti)
            showModal()
            setModalMode('winner')
        }
    }

    const checkNoWinner = () => {
        const moves = squars.filter(sq => sq === "")
        const ti = {...ties}
        if(moves.length == 0){
            setWinner("no")
            showModal()
            ti.z += 1;
            setTies(ti)
            setModalMode("winner")
        }
    }


    const handleReset = () => {
        setSquars(new Array(9).fill(''))
        setXnext(false)
        setWinner(null)
        setWinnerLine(null)
        setActiveUser('x')
        setTies({ x: 0, o: 0, z: 0 })
        hideModal()
        setScreen('start')
    }
    const handleNextRound = () => {
        setSquars(new Array(9).fill(''))
        setXnext(winner === 'x')
        setWinner(null)
        setWinnerLine(null)
        hideModal()
    }

    const cpuNextMove = (sq) => {
        const bestMove = calcBestMove(sq, activeUser === 'x' ? 'o' : 'x');
        let ns = [...squars]
        ns[bestMove] = !xnext ? 'x' : 'o'
        setSquars(ns)
        setXnext(!xnext)
        checkWinner(ns);
    }
    return (
        <GameContext.Provider value={{
            winner,
            winnerLine,
            screen,
            activeUser,
            squars,
            xnext,
            ties,
            handleNextRound,
            handleReset,
            handleSquareClick,
            setActiveUser,
            changePlayMode,
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export {GameContext, GameState}