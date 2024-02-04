import './Board.css'
import { XIcon, OIcon, RestartIcon } from '../../Components'
import BoardCard from './BoardCard'
import { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'

function Board() {
    const { squars, xnext, ties, winner, winnerLine } = useContext(GameContext)
    return (
        <div className='board'>
            <div className="board-header">
                <div className='xo'>
                    <XIcon size="sm" />
                    <OIcon size="sm" />
                </div>
                <div className='board-turn'>
                    {!xnext ? <XIcon color="light" size="sm" /> : <OIcon color="light" size="sm" />}
                    turn
                </div>
                <div>
                    <button className='btn btn-sm board-restart'><RestartIcon /></button>
                </div>
            </div>
            <div className="board-body">
                {squars.map((squar, index) => (
                    <BoardCard key={index} index={index} user={squar} active={winner && winnerLine && winnerLine.includes(index)} />
                ))}
            </div>
            <div className="board-footer">
                <div className="card bg-blue">
                    <p className="text-light"> x (you)</p>
                    <strong className='text-2xl'> {ties.x}</strong>
                </div>
                <div className="card bg-light">
                    <p className="text-light"> ties</p>
                    <strong className='text-2xl'> {ties.o + ties.x}</strong>
                </div>
                <div className="card bg-yellow">
                    <p className="text-light"> o (cpu)</p>
                    <strong className='text-2xl'> {ties.o}</strong>
                </div>
            </div>
        </div>
    )
}
export default Board;