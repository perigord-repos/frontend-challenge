import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Board from './components/game/Board';
import GameModal from './components/game/GameModal';
import './styles/App.css';
import Player from './components/game/Player';
import { formatTime } from './utils/utils'
import GridSelector from './components/game/GridSelector';
import Stats from './components/stats/Stats';

export const GameLayout: React.FC = () => {
  const {
    xWins,
    oWins,
    timeLeft,
    currentPlayer,
    totalPlayTime
  } = useGame();

  return (
    <div className="app">
      <div className="game-container container">
        <header className="grid-selector text-center mb-4">
          <h1>TIC TAC TOE GAME</h1>
          <GridSelector />
        </header>
        <div className="players-board-container d-flex flex-md-row">
          <Player label="PLAYER 1" wins={xWins} className="order-1"/>
          <div className="game-board order-0 order-md-1">
            <Board />
          </div>
          <Player label="PLAYER 2" wins={oWins} className="order-2"/>
        </div>
        <div className='game-timer mb-4'>
          <h2>
            Game time left: {formatTime(timeLeft)}
          </h2>
          <h2>Current Player: {currentPlayer}</h2>
        </div>
        <Stats />
        <h2 className="total-time mt-4">Total Play Time: {formatTime(totalPlayTime)}</h2>
      </div>
      <GameModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <GameLayout />
    </GameProvider>
  );
};

export default App;
