describe('Login Test SauceDemo', () => {

  it('Login avec utilisateur valide', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.contains('Products')

  })

})