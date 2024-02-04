import { useContext } from "react"
import { GameContext } from "../../Context/GameContext"
import OIcon from "../icons/OIcon"
import XIcon from "../icons/XIcon"

function Win() {
    const { winner, handleReset, handleNextRound } = useContext(GameContext)
    return (
        <div className="score">
            {winner && winner !== "no" ? (
                <>
                    <p>you win!</p>
                    <h3>{winner === 'x' ? <XIcon /> : <OIcon />} Takes the round{" "}</h3>
                </>
            ) : (
                <h3>
                    No Winner
                </h3>
            )}
            <div className="score-btns">
                <button className="btn btn-sm" onClick={handleReset}>Quit</button>
                <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>Next round</button>
            </div>
        </div>
    )
}

export default Win