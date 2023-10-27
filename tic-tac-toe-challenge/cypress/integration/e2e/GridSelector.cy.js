/* global cy */
describe('GridSelector Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should have the default grid size initially set', () => {
    cy.get('#gridSelector').should('have.value', '3');
  });
  
  it('should render the GridSelector component', () => {
    cy.get('.container.mt-3').should('be.visible');
  });

  it('should change the grid size when a different option is selected', () => {
    cy.get('#gridSelector').select('3');
    cy.get('#gridSelector').should('have.value', '3');

    cy.get('#gridSelector').select('6');
    cy.get('#gridSelector').should('have.value', '6');

    cy.get('#gridSelector').select('9');
    cy.get('#gridSelector').should('have.value', '9');
  });

  it('should have a label associated with the select element', () => {
    cy.get('label[for="gridSelector"]').should('exist');
  });
  
  it('should display all the grid options', () => {
    cy.get('#gridSelector option').should('have.length', 3);
    cy.get('#gridSelector option[value="3"]').should('have.text', '3x3');
    cy.get('#gridSelector option[value="6"]').should('have.text', '6x6');
    cy.get('#gridSelector option[value="9"]').should('have.text', '9x9');
  });

  it('should display correctly on mobile and desktop viewports', () => {
    cy.viewport('iphone-6');
    cy.get('.container.mt-3').should('be.visible');
    
    cy.viewport(1280, 720);
    cy.get('.container.mt-3').should('be.visible');
  });
  
  it('should change the game board layout when a 3 grid size is selected', () => {
    cy.get('#gridSelector').select('3');
    cy.get('.board > .square').should('have.length', 9);
  });

  it('should change the game board layout when a 6 grid size is selected', () => {
    cy.get('#gridSelector').select('6');
    cy.get('.board > .square').should('have.length', 36);
  });
  
  it('should change the game board layout when a 9 grid size is selected', () => {
    cy.get('#gridSelector').select('9');
    cy.get('.board > .square').should('have.length', 81);
  });
  
  it('should ensure no squares contain an svg when a new grid size is selected', () => {
    cy.get('#gridSelector').select('6');
    cy.get('.board .square').each(($square) => {
      cy.wrap($square).find('svg').should('not.exist');
    });
  });
  
});
