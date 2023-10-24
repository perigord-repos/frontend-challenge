/* global cy */

describe('Square component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('should render the game board with 9 squares', () => {
    cy.get('.board').eq(1).should('be.visible');
    cy.get('.board').eq(1).find('[data-testid="square"]').should('have.length', 9)
    
  })

  it('should be able to play a game of tic tac toe', () => {
    cy.get('.board').eq(1)
    .find('[data-testid="square"]')
    .first()
    .click()
    .find('svg#x') 
    .should('exist');  
   
    cy.get('.board').eq(1)
    .find('[data-testid="square"]').eq(1)  
    .click()
    .find('svg#o') 
    .should('exist'); 
  })

  it('should be able to win a game', () => {
    cy.get('.board').eq(1).find('[data-testid="square"]').eq(0).click();
    cy.get('.board').eq(1).find('[data-testid="square"]').eq(3).click();
    cy.get('.board').eq(1).find('[data-testid="square"]').eq(1).click();
    cy.get('.board').eq(1).find('[data-testid="square"]').eq(4).click();
    cy.get('.board').eq(1).find('[data-testid="square"]').eq(2).click();

    cy.get('.modal-body').should('be.visible').and('contain', 'X wins!');
})
})
