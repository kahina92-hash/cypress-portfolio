describe('Login Error Test', () => {

  it('Login avec mauvais mot de passe', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')

    cy.get('#login-button').click()

    cy.contains('Epic sadface')

  })

})