/* global cy */

describe('Player Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  function simulateXWin() {
    cy.get('.board > .square').eq(0).click();
    cy.get('.board > .square').eq(3).click();
    cy.get('.board > .square').eq(1).click();
    cy.get('.board > .square').eq(4).click();
    cy.get('.board > .square').eq(2).click();
    cy.get('.modal-footer button').click();
  }

  it('should render the Player component', () => {
    cy.get('.player').should('be.visible');
  });

  it('should display the correct player label', () => {
    cy.get('.player.order-1 > h2').should('have.text', 'PLAYER 1'); // Replace 'Player 1' with the expected label
  });

  it('should display the correct number of wins', () => {
    for (let i = 0; i < 5; i++) {
      simulateXWin();
    }
    cy.get('.player').first().find('.player-wins').should('have.text', '5')  
  });


  it('should be able to have additional class names', () => {
    cy.get('.player.order-1').should('exist'); 
  });

  it('should be able to have additional class names', () => {
    cy.get('.player.order-2').should('exist'); 
  });

});
