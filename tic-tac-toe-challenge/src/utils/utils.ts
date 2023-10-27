export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}


export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export const checkWinner = (board: (string | null)[], gridSize: number): [string | null, number[] | null] => {
  const winningCombinations: number[][] = [];

  // Rows
  for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j <= gridSize - 3; j++) {
          winningCombinations.push([i * gridSize + j, i * gridSize + j + 1, i * gridSize + j + 2]);
      }
  }

  // Columns
  for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j <= gridSize - 3; j++) {
          winningCombinations.push([j * gridSize + i, (j + 1) * gridSize + i, (j + 2) * gridSize + i]);
      }
  }

  // Diagonals (top-left to bottom-right)
  for (let i = 0; i <= gridSize - 3; i++) {
      for (let j = 0; j <= gridSize - 3; j++) {
          winningCombinations.push([i * gridSize + j, (i + 1) * gridSize + j + 1, (i + 2) * gridSize + j + 2]);
      }
  }

  // Diagonals (top-right to bottom-left)
  for (let i = 0; i <= gridSize - 3; i++) {
      for (let j = gridSize - 1; j >= 2; j--) {
          winningCombinations.push([i * gridSize + j, (i + 1) * gridSize + j - 1, (i + 2) * gridSize + j - 2]);
      }
  }

  for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return [board[a], combination]; // Return the winner and the winning combination
      }
  }

  return [null, null];
};
