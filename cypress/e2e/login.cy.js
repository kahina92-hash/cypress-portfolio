describe('Login Test SauceDemo', () => {

  it('Login avec utilisateur valide', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('ooooo')
    cy.get('#password').type('ooooonhnh')

    cy.get('#login-button').click()

    cy.contains('Products')

  })

})