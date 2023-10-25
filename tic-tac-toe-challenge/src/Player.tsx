import React from 'react';

interface PlayerProps {
  wins: number;
  label: string;
  className?: string;
}

const Player: React.FC<PlayerProps> = ({ wins, label, className }) => (
  <div className={`player ${className || ''}`}>
    <h2>{label}</h2>
    <h4 className="player-wins">{wins}</h4>
  </div>
);

export default Player;
