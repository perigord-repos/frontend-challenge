import React from 'react';
import { ReactComponent as XIcon } from './assets/x.svg';
import { ReactComponent as OIcon } from './assets/o.svg';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinningSquare?: boolean; 
  index?: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  return (
    <button 
      className={`square ${isWinningSquare ? 'winning-square' : ''}`} 
      onClick={onClick}
    >
      {value === 'X' ? <XIcon /> : value === 'O' ? <OIcon /> : null}
    </button>
  );
};

export default Square;