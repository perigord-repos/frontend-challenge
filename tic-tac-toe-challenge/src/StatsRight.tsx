import React from 'react';
import { useGame } from './GameContext';

function StatsRight() {
  const { xWins, oWins, } = useGame(); 
  const gamesPlayed = xWins + oWins;

  return (
    <><div className="played-games">
      <h2>Played Games</h2>
      <div className="circles-container">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className={`circle ${idx < gamesPlayed ? "filled" : ""}`}
          ></div>
        ))}
      </div>
    </div><div className="games-history">
        <h2>Games History</h2>
        <div className="squares-container">
          {[...Array(9)].map((_, idx) => {
            let content = "";
            if (idx < xWins)
              content = "P1";
            else if (idx < gamesPlayed)
              content = "P2";
            return (
              <div key={idx} className="square">
                {content}
              </div>
            );
          })}
        </div>
      </div></>
  );
}

export default StatsRight;
