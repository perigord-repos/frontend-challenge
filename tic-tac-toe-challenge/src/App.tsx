import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Board from './components/Board';
import GameModal from './components/GameModal';
import './styles/App.css';
import Player from './components/Player';
import { formatTime } from './utils/utils'
import StatsLeft from './components/StatsLeft';
import StatsRight from './components/StatsRight';
import GridSelector from './components/GridSelector';

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
        <header className="text-center mb-4">
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
        <div className="row stats-and-right-container">
          <div className='col-md-6 stats-container'>
            <StatsLeft />
          </div>
          <div className="col-md-6 right-content">
            <StatsRight />
          </div>
        </div>
        <h2 className="mt-4">Total Play Time: {formatTime(totalPlayTime)}</h2>
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
