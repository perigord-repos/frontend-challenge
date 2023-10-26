import React from 'react';
import { useGame } from '../../context/GameContext';
import PlayerStats from './PlayerStats';

function StatsLeft() {
  const { xWins, oWins } = useGame(); 

  return (
    <div className="stats">
      <h2>Victories %</h2>
      <div className="player-stats">
        <PlayerStats playerId="PLAYER 1" wins={xWins} losses={oWins} />
        <PlayerStats playerId="PLAYER 2" wins={oWins} losses={xWins} />
      </div>
    </div>
  );
}

export default StatsLeft;
