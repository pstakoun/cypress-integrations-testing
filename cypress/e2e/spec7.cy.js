describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('errors', () => {
    cy.visit('chrome://crash')
  })
})
