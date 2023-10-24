/* global cy */

describe('App Component', () => {
    beforeEach(() => {
      // Visit the application URL where your App component is rendered
      cy.visit('http://localhost:3000'); // Update the URL as needed
    });
  
    it('should render the App component', () => {
      // Check if the App component is visible on the page
      cy.get('.app').should('exist');
    });
  
    it('should display "Tic Tac Toe" header', () => {
      // Check if the "Tic Tac Toe" header text is present
      cy.get('h1').should('contain', 'Tic Tac Toe');
    });
  
    it('should render Board component', () => {
      // Check if the Board component is visible on the page
      cy.get('.board').should('exist');
    });
  
    it('should render GameOverModal component', () => {
      // Check if the GameOverModal component is visible on the page
      cy.get('.game-over-modal').should('exist');
    });
  
    it('should render GameInfo component', () => {
      // Check if the GameInfo component is visible on the page
      cy.get('.game-info').should('exist');
    });
  
    // Add more tests specific to the App component as needed
  });
  