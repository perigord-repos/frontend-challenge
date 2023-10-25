import React from 'react';
import { PlayerStatsProps } from './types'

const PlayerStats: React.FC<PlayerStatsProps> = ({ playerId, wins, losses }) => {
  const totalGames = wins + losses;
  const winPercentage = (totalGames !== 0 ? (wins / totalGames) * 100 : 0);
  const lossPercentage = (totalGames !== 0 ? (100 - winPercentage) : 0);

  return (
    <div className="player">
      <h3>{playerId}</h3>
      <div className="stats-group">
        <PercentageDisplay value={winPercentage} label="V" />
        <PercentageDisplay value={lossPercentage} label="L" />
      </div>
    </div>
  );
};

const PercentageDisplay: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="percentage-container">
      <div className="percentage-circle">{value.toFixed(0)}%</div>
      <div className="label">{label}</div>
    </div>
  );
};

export default PlayerStats;
