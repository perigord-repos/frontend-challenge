import React from 'react';

const Player: React.FC<{ wins: number, label: string }> = ({ wins, label }) => (
  <div className="player">
    <h2>{label}</h2>
    <h4 className="player-wins">{wins}</h4>
  </div>
);

export default Player;
