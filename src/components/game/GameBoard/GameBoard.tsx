import { useCheckWinner } from 'hooks/gameHooks';
import { useBoardStatusSelector, useBoardTypeSelector, useCurrentPlayerSelector, useIsRunningSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import { boardStatusChanged, gameWon } from 'state/slices/gameSlice';
import { currentPlayerChanged } from 'state/slices/playerSlice';
import { Player } from 'utils/types';
import { isWinner } from 'utils/validation';
import GameSquare from '../GameSquare/GameSquare';
import './GameBoard.scss';

const GameBoard = () => {
    const dispatch = useAppDispatch();
    const boardType = useBoardTypeSelector();
    const boardStatus = useBoardStatusSelector(boardType);
    const isRunning = useIsRunningSelector();
    const currentPlayer = useCurrentPlayerSelector();
    const win = useCheckWinner();

    const handleSquareClick = (squareIndex: number) => {
        const existingSquareStatus = boardStatus[squareIndex];
        if (existingSquareStatus || !isRunning) {
            return;
        }

        const newBoardStatus = [...boardStatus];
        newBoardStatus[squareIndex] = currentPlayer;
        const win = isWinner(boardType, newBoardStatus);
        if (win) {
            dispatch(gameWon(win));
        }

        const nextPlayer = (currentPlayer === Player.O ? Player.X : Player.O);
        dispatch(boardStatusChanged(newBoardStatus));
        dispatch(currentPlayerChanged(nextPlayer));
    };

    let squares = boardStatus.map((status, index) => {
        let highlight = win && win.winSquares.includes(index) ? true : false;
        return <GameSquare player={status} highlight={highlight} onClick={() => handleSquareClick(index)} key={index}/>;
    });

    return (
        <section className={`rk-game-board board-${boardType}`}>
            {squares}
        </section>
    );
}

export default GameBoard;

