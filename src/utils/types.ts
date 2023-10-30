export enum Player {
    'O' = 'O',
    'X' = 'X'
}

export enum Board {
    Board9 = 9,
    Board36 = 36,
    Board81 = 81
}

export type PlayerState = {
    currentPlayer: Player
};

export type Win = {
    player: Player,
    winSquares: number[]
}

export type GameState = {
    isRunning: boolean;
    totalTime: number;
    currentTime: number;
    winHistory: Win[];
    currentWin: Win | undefined;
    boardType: Board;
    boardStatus: {
        [key in Board]: Player[];
    };
};