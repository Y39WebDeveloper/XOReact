import './Start.css'
import { XIcon, OIcon } from '../../Components'
import { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'

function Start() {

    const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext)

    return (
        <div className='start'>
            <div className="start-header"><XIcon /><OIcon /></div>
            <div className="card shadow-gray">
                <h1 className='text-lg'>Pick player 1'st mark</h1>
                <div className="start-players">
                    <span className={activeUser === 'x' ? 'active' : ''} onClick={() => setActiveUser('x')}>
                        <XIcon color={activeUser === 'x' ? 'dark' : 'light'} />
                    </span>
                    <span className={activeUser === 'o' ? 'active' : ''} onClick={() => setActiveUser('o')}>
                        <OIcon color={activeUser === 'o' ? 'dark' : 'light'} />
                    </span>
                </div>
                <p className='text-light'>remember: x goes first</p>
            </div>
            <div className="start-btns">
                <button className='btn btn-yellow' onClick={() => changePlayMode('cpu')}>new game (vs CPU)</button>
                <button className='btn btn-blue' onClick={() => changePlayMode('user')}>new game (vs Player)</button>
            </div>
        </div>
    )
}

export default Start