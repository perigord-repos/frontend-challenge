import { Provider } from 'react-redux';
import store from 'state/store';
import GameScreen from 'components/game/GameScreen/GameScreen';
import StatsScreen from 'components/stats/StatsScreen/StatsScreen';
import './App.scss';

const App = () => {

    return (
        <Provider store={store}>
            <div id='app'>
                <GameScreen />
                <StatsScreen />
            </div>
        </Provider>
    );
}

export default App;
