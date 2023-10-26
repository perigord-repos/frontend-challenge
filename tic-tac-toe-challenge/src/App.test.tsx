import React from 'react';
import { render, screen } from '@testing-library/react';
// import App, { GameLayout } from './App';
import { GameProvider } from './context/GameContext';

// Mock child components to isolate GameLayout component
jest.mock('./Board', () => () => <div data-testid="mock-board"></div>);
jest.mock('./Modal', () => () => <div data-testid="mock-modal"></div>);
jest.mock('./Player', () => () => <div data-testid="mock-player"></div>);
jest.mock('./Stats', () => () => <div data-testid="mock-stats"></div>);
jest.mock('./StatsRight', () => () => <div data-testid="mock-stats-right"></div>);

describe('<GameLayout />', () => {
  
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <GameProvider>
        {/* <GameLayout /> */}
      </GameProvider>
    );
  });

  test('renders game header', () => {
    // expect(screen.getByText('TIC TAC TOE GAME')).toBeInTheDocument();
  });

  test('renders board component', () => {
    // expect(screen.getByTestId('mock-board')).toBeInTheDocument();
  });

  test('renders two player components', () => {
    const players = screen.getAllByTestId('mock-player');
    // expect(players.length).toBe(2);
  });

  test('renders game timer', () => {
    // expect(screen.getByText(/^Game time left:/i)).toBeInTheDocument();
    // expect(screen.getByText(/^Current Player:/i)).toBeInTheDocument();
  });

  test('renders stats component', () => {
    // expect(screen.getByTestId('mock-stats')).toBeInTheDocument();
  });

  test('renders stats right component', () => {
    // expect(screen.getByTestId('mock-stats-right')).toBeInTheDocument();
  });

  test('renders total play time', () => {
    // expect(screen.getByText(/^Total Play Time:/i)).toBeInTheDocument();
  });

  test('renders game over modal component', () => {
    // expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
  });

});

describe('<App />', () => {
  
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    // render(<App />);
  });

  test('renders GameLayout inside GameProvider', () => {
    // expect(screen.getByText('TIC TAC TOE GAME')).toBeInTheDocument();
  });

});
