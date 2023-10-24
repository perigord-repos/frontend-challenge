import React, { useEffect } from 'react';
import Square from './Square';
import { useGame } from './GameContext';
import { checkWinner } from './GameContext';

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
    isDraw
  } = useGame();

  useEffect(() => {
    let gameTimer: NodeJS.Timeout;
    let totalPlayTimer: NodeJS.Timeout;

    if (hasStarted && timeLeft > 0 && !winner) {
      gameTimer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }

    if (hasStarted && !allGamesFinished) {
      totalPlayTimer = setInterval(() => {
        setTotalPlayTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(gameTimer);
      clearInterval(totalPlayTimer);
    };
  }, [timeLeft, hasStarted, winner, allGamesFinished]);




  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    if (!hasStarted) {
      setHasStarted(true);
    }

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    const [newWinner, winningCombo] = checkWinner(newBoard);

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
  };

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={board[index] as 'X' | 'O' | null}
          onClick={() => handleSquareClick(index)}
          isWinningSquare={winningCombination?.includes(index) || false}
        />
      ))}
    </div>
  );
};

export default Board;
