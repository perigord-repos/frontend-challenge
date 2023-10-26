import React, { useState } from 'react';
import { ReactComponent as XIcon } from '../../assets/images/x.svg';
import { ReactComponent as OIcon } from '../../assets/images/o.svg'; 
import { getRandomColor } from '../../utils/utils'

const ICONS = {
  X: <XIcon />,
  O: <OIcon />,
};

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinningSquare?: boolean; 
  index?: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // initial white color, change to your preference
  
  const handleMouseEnter = () => {
    setBgColor(getRandomColor());
  }  

  const handleMouseLeave = () => {
    setBgColor('#FFFFFF');
  }

  return (
    <button 
      data-testid="square"
      className={`square ${isWinningSquare ? 'winning-square' : ''}`} 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: bgColor }}
    >
      {value ? ICONS[value] : null}
    </button>
  );
};

export default React.memo(Square);
