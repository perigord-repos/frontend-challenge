/* global cy */
describe('Board component', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('should mark square with X then O alternately', () => {
    cy.get('.board > .square').first().click().within(() => {
      cy.get('svg#x').should('exist');
    });
    
    cy.get('.board > .square').eq(1).click().within(() => {
      cy.get('svg#o').should('exist');
    });
  });

  // it('should display winning combination highlighted', () => {


  //   // Create a winning combination
  //   cy.get('.board > .square').eq(0).click(); // X
  //   cy.get('.board > .square').eq(3).click(); // O
  //   cy.get('.board > .square').eq(1).click(); // X
  //   cy.get('.board > .square').eq(4).click(); // O
  //   cy.get('.board > .square').eq(2).click(); // X wins

  //   cy.document().then(doc => {
  //     const style = doc.createElement('style');
  //     doc.head.append(style);
  //     style.innerHTML = `.fade.modal.show { display: none !important; }`; 
  //  });

  //   cy.get('.board > .square.winning-square').should('have.length', 3);
  // });

})
