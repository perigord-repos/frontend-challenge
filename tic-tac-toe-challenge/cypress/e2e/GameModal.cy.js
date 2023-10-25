/* global cy */

describe('GameModal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');  
  });

  it('should not render any modal if there is no winner and time is not up', () => {
    cy.get('.modal').should('not.exist');
  });

  // it('should render the championship modal if there is an ultimate winner', () => {
  //   cy.get('.modal-title').should('contain', 'Championship Over');
  //   cy.get('.modal-body').should('contain', 'is the ultimate champion with 5 wins!');
  // });

  // it('should render the game over modal if there is a winner but not an ultimate winner', () => {

  //   cy.get('.modal-title').should('contain', 'Game Over');
  //   cy.get('.modal-body').should('contain', 'wins!');
  // });

  // 
  it('should render the time\'s up modal if the time is up and there\'s no winner', () => {
    cy.get('.board').find('[data-testid="square"]').eq(0).click({ force: true });
    cy.get('.modal-header', { timeout: 130000 }).should('contain', 'Game Over');
    cy.get('.modal-body', { timeout: 130000 }).should('contain', 'Time\'s up!');
  });

  // it('should reset the game when the "Restart Game" or "Restart Championship" button is clicked', () => {

  //   cy.get('.modal-footer').contains('Restart Game').click();
  //   cy.get('.modal').should('not.exist');

  //   // For the championship:
  //   cy.get('.modal-footer').contains('Restart Championship').click();
  //   cy.get('.modal').should('not.exist');
  // });
});
