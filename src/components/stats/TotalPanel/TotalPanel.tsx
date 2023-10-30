import { useTranslation } from 'react-i18next';
import { useTotalTimeSelector } from 'hooks/selectorHooks';
import './TotalPanel.scss';
import { formatTime } from 'utils/helpers';

const TotalPanel = () => {
    const { t } = useTranslation();
    const time = useTotalTimeSelector();

    return (
        <section className='rk-total-panel'>
            <div>{t('game.time.total')}</div>
            <h5>{formatTime(time)}</h5>
        </section>
    );
}

export default TotalPanel;
