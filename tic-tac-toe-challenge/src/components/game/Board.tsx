import React, { useCallback, useEffect } from 'react';
import Square from './Square';
import { useGame } from '../../context/GameContext';
import { checkWinner } from '../../utils/utils';

const Board: React.FC = () => {
  const {
    board,
    currentPlayer,
    winner,
    setBoard,
    setCurrentPlayer,
    setWinner,
    setXWins,
    setOWins,
    setIsGameOver,
    setUltimateWinner,
    setWinningCombination,
    winningCombination,
    hasStarted,
    timeLeft,
    setTimeLeft,
    setHasStarted,
    allGamesFinished,
    setTotalPlayTime,
    setAllGamesFinished,
    setIsDraw,
    isDraw,
    gridSize
  } = useGame();

  useEffect(() => {
    let gameTimer: NodeJS.Timeout;

    if (hasStarted && timeLeft > 0 && !winner) {
      gameTimer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }

    return () => {
      clearTimeout(gameTimer);
    };
  }, [timeLeft, hasStarted, winner]);

  
  useEffect(() => {
    let totalPlayTimer: NodeJS.Timeout;

    if (hasStarted && !allGamesFinished) {
      totalPlayTimer = setInterval(() => {
        setTotalPlayTime(prevTime => prevTime + 1);
      }, 1000);
    }

    // Clean up totalPlayTimer
    return () => {
      clearInterval(totalPlayTimer);
    };
  }, [hasStarted, allGamesFinished]);


  const handleSquareClick = useCallback((index: number) => {
    if (board[index] || winner) return;

    if (!hasStarted) {
      setHasStarted(true);
    }

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    const [newWinner, winningCombo] = checkWinner(newBoard, gridSize);

    setBoard(newBoard);
    setWinner(newWinner);
    setWinningCombination(winningCombo);

    if (!newWinner) {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    } else {
      if (newWinner === 'X') {
        setXWins((prevXWins) => {
          const newXWins = prevXWins + 1;
          if (newXWins === 5) {
            setUltimateWinner('X');
            setAllGamesFinished(true);  
          }
          return newXWins;
        });
      } else if (newWinner === 'O') {
        setOWins((prevOWins) => {
          const newOWins = prevOWins + 1;
          if (newOWins === 5) {
            setUltimateWinner('O');
            setAllGamesFinished(true);  // Stop the total play time
          }
          return newOWins;
        });
      }
      setIsGameOver(true);
    }
    }, [board, currentPlayer, hasStarted, winner]); 

  return (
    <div className="board" style={{ "--grid-size": gridSize } as React.CSSProperties}>
      {[...Array(gridSize * gridSize)].map((_, idx) => (
          <Square key={idx} index={idx}  value={board[idx] as 'X' | 'O' | null}
          onClick={() => handleSquareClick(idx)}
          isWinningSquare={winningCombination?.includes(idx) || false} />
      ))}
    </div>
  );
};

export default Board;
