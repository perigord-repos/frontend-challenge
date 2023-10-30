import { Player, Win } from 'utils/types';
import { isWinner } from 'utils/validation';
import { useBoardStatusSelector, useBoardTypeSelector, useWinHistorySelector } from './selectorHooks';

export const useCheckWinner = (): Win | undefined => {

    const boardType = useBoardTypeSelector();
    const boardStatus = useBoardStatusSelector(boardType);

    return isWinner(boardType, boardStatus);
};

export const useOverallWinner = (): Player | undefined => {
    const winHistory = useWinHistorySelector();

    const results = { [Player.O]: 0, [Player.X]: 0 }
    winHistory.forEach((win) => {
        results[win.player] = results[win.player] + 1;
    });

    return (results[Player.O] > 4 ? Player.O : results[Player.X] > 4 ? Player.X : undefined);
};

