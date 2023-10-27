/* global cy */

describe('Tic Tac Toe App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('renders the game header', () => {
      cy.get('header h1').should('contain', 'TIC TAC TOE GAME');
    });

    it('renders the GridSelector component within the header', () => {
      cy.get('.ig-group').should('be.visible');
      cy.get('.ig-group').should('have.length', 1);    
    });
  
    it('renders the game board', () => {
      cy.get('.game-board').should('be.visible');
      cy.get('.game-board .board').should('have.length', 1);
    });
  
    it('renders player stats', () => {
      cy.get('.players-board-container').should('have.length', 1);
      cy.get('.players-board-container .player').eq(0).should('contain', 'PLAYER 1');
      cy.get('.players-board-container .player').eq(1).should('contain', 'PLAYER 2');
      cy.get('.players-board-container .player-wins').eq(0).should('contain', '0');
      cy.get('.players-board-container .player-wins').eq(1).should('contain', '0');
    });

    it('renders game timer and stats', () => {
      cy.get('.game-timer').should('be.visible');
      cy.get('.stats-container').should('be.visible');
      cy.get('.right-content').should('be.visible');
    });

    it('displays the game time left and current player', () => {
      cy.get('.game-timer h2').eq(0).should('contain', 'Game time left:'); 
      cy.get('.game-timer h2').eq(1).should('contain', 'Current Player:');
    });

    it('renders the Stats component', () => {
      cy.get('.stats-and-right-container').should('be.visible');
    });

    it('displays the total play time', () => {
      cy.get('.total-time').should('contain', 'Total Play Time:'); 
    });

  });
  
  