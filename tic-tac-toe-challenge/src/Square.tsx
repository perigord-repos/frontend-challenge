import React from 'react';
import { ReactComponent as XIcon } from './assets/x.svg';
import { ReactComponent as OIcon } from './assets/o.svg';

const ICONS = {
  X: <XIcon />,
  O: <OIcon />,
};

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinningSquare?: boolean; 
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  return (
    <button 
      data-testid="square"
      className={`square ${isWinningSquare ? 'winning-square' : ''}`} 
      onClick={onClick}
    >
      {value ? ICONS[value] : null}
    </button>
  );
};

export default Square;
