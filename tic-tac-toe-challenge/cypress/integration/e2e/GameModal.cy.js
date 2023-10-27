/* global cy */

describe('GameModal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');  
  });

  function simulateXWin() {
    cy.get('.board > .square').eq(0).click();
    cy.get('.board > .square').eq(3).click();
    cy.get('.board > .square').eq(1).click();
    cy.get('.board > .square').eq(4).click();
    cy.get('.board > .square').eq(2).click();
  }

  it('should not render any modal if there is no winner and time is not up', () => {
    cy.get('.modal').should('not.exist');
  });

  it('should render the modal with the winning player when there is a winner', () => {
    simulateXWin();
    cy.get('.modal-header').should('contain', 'Game Over');
    cy.get('.modal-body').should('contain', 'X wins!');
    cy.get('.modal-footer button').should('have.text', 'Restart Game');
  });

  it('should render the modal declaring the ultimate winner', () => {
    for (let i = 0; i < 5; i++) {
      simulateXWin();
      if (i < 4) {
        cy.get('.modal-footer button').click();
      }
    }
    cy.get('.modal-header').should('contain', 'Championship Over');
    cy.get('.modal-body').should('contain', 'X is the ultimate champion with 5 wins!');
    cy.get('.modal-footer button').should('have.text', 'Restart Championship');
  });

  it('should reset the game when the button is clicked', () => {
    simulateXWin();
    cy.get('.modal-footer button').click();
    cy.get('.modal').should('not.exist');
  });
  
  it('should render the time\'s up modal if the time is up and there\'s no winner', () => {
    cy.get('.board').find('[data-testid="square"]').eq(0).click({ force: true });
    cy.get('.modal-header', { timeout: 130000 }).should('contain', 'Game Over');
    cy.get('.modal-body', { timeout: 130000 }).should('contain', 'Time\'s up!');
  });

});
