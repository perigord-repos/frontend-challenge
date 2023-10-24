import React from 'react';
import { GameProvider, useGame } from './GameContext';
import Board from './Board';
import GameOverModal from './GameOverModal';
import './App.css';
import Player from './Player';
import { formatTime } from './utils'
import Stats from './Stats';
import StatsRight from './StatsRight';

const GameLayout: React.FC = () => {
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
        <header className="text-center mb-4">
          <h1>TIC TAC TOE GAME</h1>
        </header>
        <div className="game-board mb-4 d-block d-md-none">
          <Board />
        </div>
        <div className="row mb-4 d-block d-md-none">
          <div className="col-12 mb-4">
            <Player label="PLAYER 1" wins={xWins} />
          </div>
          <div className="col-12">
            <Player label="PLAYER 2" wins={oWins} />
          </div>
        </div>
        <div className="players-board-container d-none d-md-flex">
          <Player label="PLAYER 1" wins={xWins} />
          <div className="game-board">
            <Board />
          </div>
          <Player label="PLAYER 2" wins={oWins} />
        </div>
        <div className='game-timer mb-4'>
          <h2>
            Game time left: {formatTime(timeLeft)}
          </h2>
          <h2>Current Player: {currentPlayer}</h2>
        </div>
        <div className="row stats-and-right-container">
          <div className='col-md-6 stats-container'>
            <Stats />
          </div>
          <div className="col-md-6 right-content">
            <StatsRight />
          </div>
        </div>
        <h2 className="mt-4">Total Play Time: {formatTime(totalPlayTime)}</h2>
      </div>
      <GameOverModal />
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
