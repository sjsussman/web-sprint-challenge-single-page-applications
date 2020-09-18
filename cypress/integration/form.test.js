describe('pizza-order app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const sardines = () => cy.get('input[name=sardines]')
    const submit = () => cy.get('button')

    it('shouldstart', () => {
      expect(1 + 2).to.equal(3)
    })
    
    //test that you can add text to the box
    it('should get the name and type in it', () =>{
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
    })

    //test that you can select multiple toppings
    it('should be able to select multiple toppings', () =>{
        pepperoni()
        .check()
        .should('have.value', true)
        sardines()
        .check()
        .should('have.value', true)
    })

    //test that you can submit the form
    it('should fill out everything and submit', () =>{
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
        sizeInput()
        .select('Large')
        .should('have.value', 'Large')
        submit()
        .click()
        cy.contains('Steven').should('exist')
        cy.contains('Large').should('exist')
    })

})