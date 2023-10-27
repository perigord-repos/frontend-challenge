import React from 'react';
import { PlayedGamesProps } from '../../types'

const PlayedGames: React.FC<PlayedGamesProps> = ({ totalGames, gamesPlayed }) => {
  return (
    <div className="played-games">
      <h2>Played Games</h2>
      <div className="circles-container">
        {[...Array(totalGames)].map((_, idx) => (
          <div
            key={idx}
            className={`circle ${idx < gamesPlayed ? "filled" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PlayedGames;
