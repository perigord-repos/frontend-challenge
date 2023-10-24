import React from 'react';
import { useGame } from './GameContext';
import { formatTime } from './utils'

const GameInfo: React.FC = () => {
  const { currentPlayer, winner, xWins, oWins, totalPlayTime, incrementXWins, incrementOWins } = useGame();

  // if (winner === "Player 1") {
  //   incrementXWins();
  // } else if (winner === "Player 2") {
  //   incrementOWins();
  // }

  return (
    <div className="game-info">
      {winner && <h2>{winner} wins!</h2>}

    </div>
  );
};

export default GameInfo;
