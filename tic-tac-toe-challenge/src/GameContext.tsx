import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IGameContext {
  board: (string | null)[];
  currentPlayer: string;
  winner: string | null;
  xWins: number;
  oWins: number;
  isGameOver: boolean;
  setBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  setXWins: React.Dispatch<React.SetStateAction<number>>;
  setOWins: React.Dispatch<React.SetStateAction<number>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
  ultimateWinner: string | null;
  setUltimateWinner: React.Dispatch<React.SetStateAction<string | null>>;
  winningCombination: number[] | null;
  setWinningCombination: React.Dispatch<React.SetStateAction<number[] | null>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  hasStarted: boolean;
  setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
  totalPlayTime: number;
  setTotalPlayTime: React.Dispatch<React.SetStateAction<number>>;
  allGamesFinished: boolean;
  setAllGamesFinished: React.Dispatch<React.SetStateAction<boolean>>;
  incrementXWins: () => void;
  incrementOWins: () => void;
  initialState: GameState;
  isDraw: boolean;
  setIsDraw: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GameState {
  xWins: number;
  oWins: number;
  isDraw: boolean,
}

const GameContext = createContext<IGameContext | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

interface IGameProviderProps {
  children: ReactNode;
}

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

  const initialState = {
    xWins: 0,
    oWins: 0,
    totalGames: 0,
    isDraw: false,
  };

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
      initialState, isDraw, setIsDraw
    }}>
      {children}
    </GameContext.Provider>
  );
};
