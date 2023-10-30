import { useWinHistorySelector } from 'hooks/selectorHooks';
import { useTranslation } from 'react-i18next';
import { getPlayerClass } from 'utils/helpers';
import './HistoryPanel.scss';

const HistoryPanel = () => {
    const { t } = useTranslation();
    const winHistory = useWinHistorySelector();

    let content = [];
    for (let i = 0; i < 9; i++) {
        let winner = null;
        let playerClass = '';
        if (winHistory[i]) {
            winner = `P${winHistory[i].player}`;
            playerClass = getPlayerClass(winHistory[i].player);
        }
        content.push(<div className={`rk-history-item ${playerClass}`} key={i}>{winner}</div>);
    }

    return (
        <div className='rk-history-panel'>
            <div>{t('game.history')}</div>
            <div className='rk-history-items'>
                {content}
            </div>
        </div>
    );
}

export default HistoryPanel;
