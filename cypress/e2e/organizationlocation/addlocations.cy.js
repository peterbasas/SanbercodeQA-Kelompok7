describe('template spec', () => {
  it('succes_addLocations', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/ ')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.orangehrm-header-container > div > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('jaya')
    cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jakarta Timur')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('DKI Jakarta')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('13640')
    cy.get('.oxd-select-text-input').click()
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0894646733')
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08439383')
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Cililitan kecil')
    cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Halo')
    cy.get('.oxd-button--secondary').click() 
    
  })
  it('failed_addLocations', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/ ')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.orangehrm-header-container > div > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('jaya')
    cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jakarta Timur')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('DKI Jakarta')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('13640')
    cy.get('.oxd-select-text-input').click()
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0894646733')
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08439383')
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Cililitan kecil')
    cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Halo')
    cy.get('.oxd-button--secondary').click() 
    
  })
})