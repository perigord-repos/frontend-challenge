import { Board, Player, Win } from "./types";

const board9WinSquares = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

const board36WinSquares = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],

    [0, 6, 12, 18, 24, 30],
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],

    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30]
];

const board81WinSquares = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80],

    [0, 9, 18, 27, 36, 45, 54, 63, 72],
    [1, 10, 19, 28, 27, 46, 55, 64, 73],
    [2, 11, 20, 29, 38, 47, 56, 65, 74],
    [3, 12, 21, 30, 39, 48, 57, 66, 75],
    [4, 13, 22, 31, 40, 49, 58, 67, 76],
    [5, 14, 23, 32, 41, 50, 59, 68, 77],
    [6, 15, 24, 33, 42, 51, 60, 69, 78],
    [7, 16, 25, 34, 43, 52, 61, 70, 79],
    [8, 17, 26, 35, 44, 53, 62, 71, 80],

    [0, 10, 20, 30, 40, 50, 60, 70, 80],
    [72, 64, 56, 48, 40, 32, 24, 16, 8]
];

const boardWinSquares = {
    [Board.Board9]: board9WinSquares,
    [Board.Board36]: board36WinSquares,
    [Board.Board81]: board81WinSquares
};

const checkWinTest = (boardStatus: string[], winTest: number[]): Player | undefined => {

    let firstPlayerFound = boardStatus[winTest[0]];
    if (!firstPlayerFound) {
        return undefined;
    }
    for (let i = 1; i < winTest.length; i++) {
        let nextPlayerFound = boardStatus[winTest[i]];
        if (nextPlayerFound !== firstPlayerFound) {
            return undefined;
        }
    }
    return firstPlayerFound as Player;
}

export const isWinner = (boardType: Board, boardStatus: string[]): Win | undefined => {
    const winTests = boardWinSquares[boardType];
    let player = undefined;
    let winSquares = undefined;
    for (let winTest of winTests) {
        player = checkWinTest(boardStatus, winTest);
        if (player) {
            winSquares = winTest;
            return { player, winSquares };
        }
    }
    return undefined;
};