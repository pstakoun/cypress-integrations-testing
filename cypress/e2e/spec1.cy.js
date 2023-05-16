describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('cra', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('p').should('have.text', 'Edit src/App.js and save to reload.');
    cy.get('.App-link').should('have.text', 'Learn React');
    /* ==== End Cypress Studio ==== */
  });
})