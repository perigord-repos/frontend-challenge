/* global cy */

describe('Square component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('should render the game board with 9 squares', () => {
    cy.get('.board').should('be.visible');
    cy.get('.board').find('[data-testid="square"]').should('have.length', 9)
    
  })

  it('should be able to play a game of tic tac toe', () => {
    cy.get('.board').find('[data-testid="square"]').first().click();
    cy.get('.board').find('svg#x').should('exist');
    cy.get('.board').find('[data-testid="square"]').eq(1).click();
    cy.get('.board').find('svg#o').should('exist');
  });
  

  it('should be able to win a game', () => {
    cy.get('.board').find('[data-testid="square"]').eq(0).click({ force: true });
    cy.get('.board').find('[data-testid="square"]').eq(3).click({ force: true });
    cy.get('.board').find('[data-testid="square"]').eq(1).click({ force: true });
    cy.get('.board').find('[data-testid="square"]').eq(4).click({ force: true });
    cy.get('.board').find('[data-testid="square"]').eq(2).click({ force: true });
    cy.get('.modal-body').should('be.visible').and('contain', 'X wins!');
})
})
