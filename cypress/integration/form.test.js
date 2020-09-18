describe('pizza-order app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    const orderButton = () => cy.get('button[name=orderButton]')
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const sardines = () => cy.get('input[name=sardines]')
    const submitButton = () => cy.get('button[name=submitButton')

    it('shouldstart', () => {
      expect(1 + 2).to.equal(3)
    })
    
    //test that you can add text to the box
    it('should get the name and type in it', () =>{
        orderButton().click()
        cy.contains('Order Form').should('exist')
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
    })

    //test that you can select multiple toppings
    it('should be able to select multiple toppings', () =>{
        orderButton().click()
        cy.contains('Order Form').should('exist')
        pepperoni()
        .check()
        sardines()
        .check()
        .should('have.value', 'on')
        pepperoni()
        .should('have.value', 'on')

    })

    //test that you can submit the form
    it('should fill out everything and submit', () =>{
        orderButton().click()
        cy.contains('Order Form').should('exist')
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
        sizeInput()
        .select('Large')
        .should('have.value', 'large')
        submitButton()
        .click()
        cy.contains('Steven').should('exist')
        cy.contains('Large').should('exist')
    })

})