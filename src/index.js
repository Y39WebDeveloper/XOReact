import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GameState } from './Context/GameContext';
import { ModalState } from './Context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);