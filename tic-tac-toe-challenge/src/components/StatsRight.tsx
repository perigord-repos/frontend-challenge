import React from 'react';
import { useGame } from '../context/GameContext';
import PlayedGames from './PlayedGames';
import GamesHistory from './GamesHistory';

const TOTAL_GAMES = 9;

function StatsRight() {
  const { xWins, oWins } = useGame();
  
  return (
    <>
      <PlayedGames totalGames={TOTAL_GAMES} gamesPlayed={xWins + oWins} />
      <GamesHistory totalGames={TOTAL_GAMES} xWins={xWins} oWins={oWins} />
    </>
  );
}

export default StatsRight;
