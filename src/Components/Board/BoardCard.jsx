import { useContext } from "react"
import { GameContext } from "../../Context/GameContext"
import OIcon from "../icons/OIcon"
import XIcon from "../icons/XIcon"

function BoardCard({ user = "nouser", active, index }) {
    const { handleSquareClick } = useContext(GameContext)
    return (
        <div className={`card 
            ${active && user === 'x' && 'shadow-blue'}
            ${active && user === 'o' && 'shadow-yellow'}
            ${!active ? 'shadow-gray' : 'active'}
        `} onClick={() => handleSquareClick(index)}>
            {user === 'x' && <XIcon color={active && 'dark'} size="lg" />}
            {user === 'o' && <OIcon color={active && 'dark'} size="lg" />}
        </div>
    )
}

export default BoardCard