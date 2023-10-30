import { useOverallWinner } from 'hooks/gameHooks';
import { useTranslation } from 'react-i18next';
import GameBoard from '../GameBoard/GameBoard';
import './BoardPanel.scss';

const BoardPanel = () => {
    const overallWinner = useOverallWinner();
    const { t } = useTranslation();

    let content = null;

    if (overallWinner) {
        content = (
            <div className='rk-match-success'>
                <h3>{t('game.overall.success', { player: `${overallWinner}` })}</h3>
            </div>
        );
    }
    else {
        content = <GameBoard />
    }

    return (
        <div className='rk-board-panel'>
            {content}
        </div>
    );
}

export default BoardPanel;
