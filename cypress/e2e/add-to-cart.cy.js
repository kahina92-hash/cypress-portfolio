describe('Add Product To Cart', () => {

  it('Ajouter un produit au panier', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.contains('Add to cart').first().click()

    cy.get('.shopping_cart_badge').should('contain', '1')

  })

})