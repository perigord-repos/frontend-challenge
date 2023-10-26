import React, { createContext, useState, useContext } from 'react';
import { IGameContext, IGameProviderProps } from './types';

const GameContext = createContext<IGameContext | undefined>(undefined);

const initialState = {
  xWins: 0,
  oWins: 0,
  totalGames: 0,
  isDraw: false,
};

const initialSquaresValue = Array(81).fill(null);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export const GameProvider: React.FC<IGameProviderProps> = ({ children }) => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [xWins, setXWins] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [ultimateWinner, setUltimateWinner] = useState<string | null>(null);
  const [winningCombination, setWinningCombination] = useState<number[] | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [totalPlayTime, setTotalPlayTime] = useState<number>(0);
  const [allGamesFinished, setAllGamesFinished] = useState<boolean>(false);
  const [gridSize, setGridSize] = useState(3); 
  const [squares, setSquares] = useState(initialSquaresValue); // replace with actual type and initial value

  function incrementXWins() {
    setXWins(prevXWins => prevXWins + 1);
  }

  function incrementOWins() {
    setOWins(prevOWins => prevOWins + 1);
  }

  const [isDraw, setIsDraw] = React.useState(false);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setIsGameOver(false);
    setUltimateWinner(null);
    setHasStarted(false);
    setTimeLeft(120);
    setIsDraw(false);
  };

  return (
    <GameContext.Provider value={{
      board, currentPlayer, winner, xWins, oWins, isGameOver,
      setBoard, setCurrentPlayer, setWinner, setXWins, setOWins,
      setIsGameOver, resetGame, ultimateWinner, setUltimateWinner,
      winningCombination, setWinningCombination, timeLeft, setTimeLeft,
      hasStarted, setHasStarted, totalPlayTime, setTotalPlayTime,
      allGamesFinished, setAllGamesFinished, incrementXWins, incrementOWins,
      initialState, isDraw, setIsDraw, gridSize, setGridSize, squares, setSquares
    }}>
      {children}
    </GameContext.Provider>
  );
};
