import { useIsRunningSelector } from 'hooks/selectorHooks';
import { useTranslation } from 'react-i18next';

import { useOverallWinner } from 'hooks/gameHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import { Fragment, useEffect } from 'react';
import { boardTypeChanged, gameStarted, gameTimeIncremented, matchReset } from 'state/slices/gameSlice';
import { Board } from 'utils/types';
import './StartPanel.scss';

const StartPanel = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const isRunning = useIsRunningSelector();
    const overallWinner = useOverallWinner();

    useEffect(() => {

        const timer = setInterval(() => {
            if (isRunning) {
                dispatch(gameTimeIncremented());
            }
        }, 1000);



        return () => clearInterval(timer);
    }, [isRunning, dispatch]);

    const handleClick = (boardType: Board) => {
        dispatch(boardTypeChanged(boardType));
        dispatch(gameStarted());
    };

    const handleRestartClick = () => {
        dispatch(matchReset());
    };

    let content = null;
    if (!isRunning && !overallWinner) {
        content = (
            <Fragment>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board9)}>{t('button.start.9')}</button>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board36)}>{t('button.start.36')}</button>
                <button type='button' className='btn btn-primary' onClick={() => handleClick(Board.Board81)}>{t('button.start.81')}</button>
            </Fragment>
        );
    }
    else if (overallWinner) {
        content = <button type='button' className='btn btn-primary' onClick={handleRestartClick}>{t('button.restart')}</button>;
    }

    return (
        <div className='rk-start-panel'>
            {content}
        </div>
    );
}

export default StartPanel;
