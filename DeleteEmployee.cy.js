describe('Menu PIM - Employee List', () => {
  it('Showing Employee List Successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()
  })
})