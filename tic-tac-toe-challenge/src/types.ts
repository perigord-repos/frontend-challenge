import { ReactNode } from "react";

export interface PlayerProps {
    wins: number;
    label: string;
    className?: string;
}

export interface PlayerStatsProps {
    playerId: string;
    wins: number;
    losses: number;
  }

export interface ModalContentProps {
    title: string;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
}

export interface IGameContext {
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

export interface GameState {
    xWins: number;
    oWins: number;
    isDraw: boolean,
}

export interface IGameProviderProps {
    children: ReactNode;
}