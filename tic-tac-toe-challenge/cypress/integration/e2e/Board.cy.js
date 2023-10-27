/* global cy */
describe('Board component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('should render the correct number of squares', () => {
    cy.get('.board > .square').should('have.length', 9); 
  });

  it('should mark square with X then O alternately', () => {
    cy.get('.board > .square').first().click().within(() => {
      cy.get('svg#x').should('exist');
    });
    
    cy.get('.board > .square').eq(1).click().within(() => {
      cy.get('svg#o').should('exist');
    });
  });

  it('should not start the timer until the first move', () => {
    cy.wait(5000); 
    cy.get('.game-timer').should('contain', '2:00');
    cy.get('.board > .square').first().click();
    cy.wait(1000);
    cy.get('.game-timer').should('not.contain', '00:00');
  });
})
