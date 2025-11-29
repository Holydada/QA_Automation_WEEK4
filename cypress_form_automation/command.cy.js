describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.products').find('.product').eq(2).should('have.length')
    cy.get('.search-keyword').type('banana').should('be.visible')
    cy.get('.search-button').click()
  })
})