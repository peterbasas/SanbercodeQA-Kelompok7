describe('Menu Admin - Organization', () => {
  it('Showing Organization General Information Successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
  })
})