import { useAppSelector } from 'hooks/stateHooks';
import { Board } from 'utils/types';

export const useBoardTypeSelector = () => {
    return useAppSelector((state) => state.game.boardType);
};

export const useBoardStatusSelector = (boardType: Board) => {
    return useAppSelector((state) => state.game.boardStatus[boardType]);
};

export const useCurrentPlayerSelector = () => {
    return useAppSelector((state) => state.player.currentPlayer);
};

export const useWinHistorySelector = () => {
    return useAppSelector((state) => state.game.winHistory);
};

export const useIsRunningSelector = () => {
    return useAppSelector((state) => state.game.isRunning);
};

export const useCurrentWinSelector = () => {
    return useAppSelector((state) => state.game.currentWin);
};


export const useTotalTimeSelector = () => {
    return useAppSelector((state) => state.game.totalTime);
};


export const useCurrentTimeSelector = () => {
    return useAppSelector((state) => state.game.currentTime);
};