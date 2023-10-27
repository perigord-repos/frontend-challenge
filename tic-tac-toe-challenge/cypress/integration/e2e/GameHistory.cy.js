/* global cy */
describe('Games History component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000', { 
    });
  });

  it('should display the games history header', () => {
    cy.get('.games-history h2').should('have.text', 'Games History');
  });

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-6');
    cy.get('.games-history .square').each(($square) => {
      // eslint-disable-next-line no-unused-expressions
      expect($square).to.be.visible;
    });
  });

  it('should display correctly on tablet', () => {
    cy.viewport('ipad-2');
    cy.get('.games-history .square').each(($square) => {
      // eslint-disable-next-line no-unused-expressions
      expect($square).to.be.visible;
    });
  });
})
