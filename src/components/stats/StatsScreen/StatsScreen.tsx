import HistoryPanel from '../HistoryPanel/HistoryPanel';
import PercentagePanel from '../PercentagePanel/PercentagePanel';
import TotalPanel from '../TotalPanel/TotalPanel';

const StatsScreen = () => {


    return (
        <section className='rk-stats-screen'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <PercentagePanel/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <HistoryPanel />
                    </div>
                </div>
                <TotalPanel />
            </div>
        </section>
    );
}

export default StatsScreen;
