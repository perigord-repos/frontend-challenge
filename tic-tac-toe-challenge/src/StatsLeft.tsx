import React from 'react';
import { useGame } from './GameContext';
import { formatTime } from './utils';

function StatsLeft() {
  const { xWins, oWins, totalPlayTime } = useGame(); 

  const totalGames = xWins + oWins;
  const player1WinPercentage = (totalGames !== 0 ? (xWins / totalGames) * 100 : 0);
  const player2WinPercentage = (totalGames !== 0 ? (oWins / totalGames) * 100 : 0);
  const player1LossPercentage = (totalGames !== 0 ? (100 - player1WinPercentage) : 0);
  const player2LossPercentage = (totalGames !== 0 ? (100 - player2WinPercentage) : 0);

  return (
    <div className="stats">
      <h2>Victories %</h2>
      
      <div className="player-stats">
        <div className="player">
          <h3>PLAYER 1</h3>
          <div className="stats-group">
              <div className="percentage-container">
                  <div className="percentage-circle">{player1WinPercentage.toFixed(0)}%</div>
                  <div className="label">V</div>
              </div>
              <div className="percentage-container">
                  <div className="percentage-circle">{player1LossPercentage.toFixed(0)}%</div>
                  <div className="label">L</div>
              </div>
          </div>
        </div>

        <div className="player">
          <h3>PLAYER 2</h3>
          <div className="stats-group">
              <div className="percentage-container">
                  <div className="percentage-circle">{player2WinPercentage.toFixed(0)}%</div>
                  <div className="label">V</div>
              </div>
              <div className="percentage-container">
                  <div className="percentage-circle">{player2LossPercentage.toFixed(0)}%</div>
                  <div className="label">L</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsLeft;
