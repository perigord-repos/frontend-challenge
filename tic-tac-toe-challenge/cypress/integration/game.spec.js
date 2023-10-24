// cypress/integration/game.spec.js
/* global cy */


describe('Tic Tac Toe Game', () => {
    it('should display the game board and player information', () => {
      // Visit the application's URL
      cy.visit('/');
  
      // Verify that the game title is displayed
      cy.get('h1').should('contain', 'TIC TAC TOE GAME');
  
      // Check if the game board is visible
      cy.get('.game-board').should('be.visible');
  
      // Check if player information for PLAYER 1 is displayed
      cy.get('.player').eq(0).should('contain', 'PLAYER 1');
      
      // Check if player information for PLAYER 2 is displayed
      cy.get('.player').eq(1).should('contain', 'PLAYER 2');
      
      // Check if the game timer is visible
      cy.get('.game-timer').should('be.visible');
    });
  
    it('should allow players to make a move', () => {
      // Visit the application's URL
      cy.visit('/');
  
      // Find and click on a cell in the game board
      cy.get('.cell').eq(0).click();
  
      // Verify that the cell now displays an 'X' (or 'O' depending on your game logic)
      cy.get('.cell').eq(0).should('contain', 'X');
    });
  
    // Add more tests for other interactions and scenarios as needed
  });
  