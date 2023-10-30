import { MouseEventHandler, memo } from 'react';
import { getPlayerClass } from 'utils/helpers';
import { Player } from 'utils/types';
import './GameSquare.scss';

type GameSquareProps = {
    player?: Player
    highlight: boolean,
    onClick: MouseEventHandler<HTMLDivElement>
};

const GameSquare = ({ player, highlight, onClick }: GameSquareProps) => {

    const playerClass = player ? getPlayerClass(player) : '';
    const highlightClass = (highlight ? 'rk-highlight' : '');

    return (
        <div className='rk-game-square' onClick={onClick}>
            <div className={`rk-game-square-content ${playerClass} ${highlightClass}`} />
        </div>
    );
}

export default memo(GameSquare);

