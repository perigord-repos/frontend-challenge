/* global cy */

describe('Square component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('should render the game board with 9 squares', () => {
    cy.get('.board').should('be.visible');
    cy.get('.board').find('[data-testid="square"]').should('have.length', 9)
  })

  it('should render X icon when value is set to X', () => {
    cy.get('.board').find('[data-testid="square"]').first().click();
    cy.get('.board').find('svg#x').should('exist');
  });

  it('should be able to play a game of tic tac toe', () => {
    cy.get('.board').find('[data-testid="square"]').first().click();
    cy.get('.board').find('svg#x').should('exist');
    cy.get('.board').find('[data-testid="square"]').eq(1).click();
    cy.get('.board').find('svg#o').should('exist');
  });

  it('should be able to win a game', () => {
    cy.get('.board').find('[data-testid="square"]').eq(0).click();
    cy.get('.board').find('[data-testid="square"]').eq(3).click();
    cy.get('.board').find('[data-testid="square"]').eq(1).click();
    cy.get('.board').find('[data-testid="square"]').eq(4).click();
    cy.get('.board').find('[data-testid="square"]').eq(2).click();
    cy.get('.modal-body').should('be.visible').and('contain', 'X wins!');
  })

  it('should highlight winning squares', () => {
    cy.get('.board').find('[data-testid="square"]').eq(0).click();
    cy.get('.board').find('[data-testid="square"]').eq(3).click();
    cy.get('.board').find('[data-testid="square"]').eq(1).click();
    cy.get('.board').find('[data-testid="square"]').eq(4).click();
    cy.get('.board').find('[data-testid="square"]').eq(2).click();
    cy.get('.board').find('[data-testid="square"]').eq(0).should('have.class', 'winning-square');
    cy.get('.board').find('[data-testid="square"]').eq(1).should('have.class', 'winning-square');
    cy.get('.board').find('[data-testid="square"]').eq(2).should('have.class', 'winning-square');
  });

  it('should change the background color on mouse enter', () => {
    const initialColor = 'rgb(255, 255, 255)';
    cy.get('.board').find('[data-testid="square"]').eq(0)
    .trigger('mouseenter')
    .should('not.equal', initialColor);
  });
})
