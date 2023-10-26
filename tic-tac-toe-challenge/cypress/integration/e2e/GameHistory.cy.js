/* global cy */
describe('Games History component', () => {

  beforeEach(() => {
    const mockData = {
      totalGames: 3,
      xWins: 2,
      oWins: 1
    };
    cy.visit('http://localhost:3000', { 
      onBeforeLoad: (win) => {
        win.__DATA__ = mockData;
      } 
    });
  });

  it('should display the games history header', () => {
    cy.get('.games-history h2').should('have.text', 'Games History');
  });

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-6');
    // Add assertions for mobile layout
  });
  

})
