/* global cy */

describe('Tic Tac Toe App', () => {

    beforeEach(() => {
      // Visiting the app before each test
      cy.visit('http://localhost:3000/');
    });
  
    it('renders the game header', () => {
      cy.get('header h1').should('contain', 'TIC TAC TOE GAME');
    });
  
    it('renders the game board', () => {
      // Assuming 2 Board components render 
      cy.get('.game-board').should('be.visible');
      cy.get('.game-board .board').should('have.length', 2);
    });
  
    it('renders player stats', () => {
      cy.get('.col-12').eq(0).should('contain', 'PLAYER 1');
      cy.get('.col-12').eq(1).should('contain', 'PLAYER 2');
  
      // Check wins for each player (requires initial state or stubbing data)
      cy.get('.col-12').eq(0).should('contain', '0');  // Assuming initial wins is 0
      cy.get('.col-12').eq(1).should('contain', '0');
    });
  
    it('renders game timer and stats', () => {
      cy.get('.game-timer').should('be.visible');
      cy.get('.stats-container').should('be.visible');
      cy.get('.right-content').should('be.visible');
    });
  
  });
  
  