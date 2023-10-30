import { Player } from 'utils/types';
import BoardPanel from '../BoardPanel/BoardPanel';
import PlayerTitle from '../PlayerTitle/PlayerTitle';
import StartPanel from '../StartPanel/StartPanel';
import TimePanel from '../TimePanel/TimePanel';
import './GameScreen.scss';

const GameScreen = () => {

    return (
        <section className='rk-game-screen'>
            <div className='container'>
                <div className='row mb-4'>
                    <div className='col-12 col-lg-6 order-lg-1'>
                        <BoardPanel />
                    </div>
                    <div className='col-6 col-lg-3 order-lg-0'>
                        <PlayerTitle player={Player.O} />
                    </div>

                    <div className='col-6  col-lg-3 order-lg-2'>
                        <PlayerTitle player={Player.X} />
                    </div>
                </div>
                <StartPanel />
                <TimePanel />
            </div>
        </section>
    );
}

export default GameScreen;

