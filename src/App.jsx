import './App.css';
import { Board, Modal, Start } from './Components';

import React from 'react'
import { useContext } from 'react';
import { GameContext } from './Context/GameContext';

const App = () => {

  const {screen} = useContext(GameContext)

  return (
    <div className="app">
      <div className='container'>
        {screen === 'start' && <Start />}
        {screen === 'game' && <Board />}
      </div>
      <Modal />
    </div>
  )
}

export default App