/* global cy */

import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders', () => {
    // Mount the <App /> component for testing
    cy.mount(<App />);
    
    // You can add assertions specific to the <App /> component here
  });
});

describe('App Component', () => {
  beforeEach(() => {
    // Visit the application URL where your App component is rendered
    cy.visit('http://localhost:3000'); // Update the URL as needed
  });

  it('should render the App component', () => {
    cy.get('.app').should('exist');
  });

  it('should display "Tic Tac Toe" header', () => {
    cy.get('h1').should('contain', 'Tic Tac Toe');
  });

  it('should render Board component', () => {
    cy.get('.board').should('exist');
  });

  it('should render GameOverModal component', () => {
    cy.get('.game-over-modal').should('exist');
  });

  it('should render GameInfo component', () => {
    cy.get('.game-info').should('exist');
  });

  // Add more tests specific to the App component as needed
});
