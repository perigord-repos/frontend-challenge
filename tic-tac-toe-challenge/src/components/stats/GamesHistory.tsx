import React from 'react';
import { GamesHistoryProps } from '../../types'

const GamesHistory: React.FC<GamesHistoryProps> = ({ totalGames, xWins, oWins }) => {
  const gamesPlayed = xWins + oWins;

  return (
    <div className="games-history">
      <h2>Games History</h2>
      <div className="squares-container">
        {[...Array(totalGames)].map((_, idx) => {
          let content = "";
          if (idx < xWins)
            content = "P1";
          else if (idx < gamesPlayed)
            content = "P2";
          return (
            <div key={idx} className="square rounded">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesHistory;
