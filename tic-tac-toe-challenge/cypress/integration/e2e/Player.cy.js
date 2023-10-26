/* global cy */

describe('Player Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Replace with your app's URL
  });

  it('should render the Player component', () => {
    cy.get('.player').should('be.visible');
  });

});
