describe('Learning Resources Tests', () => {
  it('Should navigate to Learning Resources and choose a Grade level', () => {
    cy.visit('https://tvolearn.com/')

    // Navigate to Learning Resources (K-12) dropdown
    cy.get('.site-nav--has-dropdown').should('exist');
    cy.get('.site-nav--has-dropdown').contains('Learning Resources (K-12)').click({force: true})


    // Choose Grade level between 1 and 12
    const gradeLevel = Cypress._.random(1, 12)
    cy.contains('.site-nav__label', 'Grade ' + gradeLevel).click({force: true})

    // Scroll down to "Learn Forward in the Curriculum" section and click any card 
    cy.contains('Learn Forward in the Curriculum').scrollIntoView()
    cy.get('.card-body').eq(0).click() // Clicking on the first card
  
    // Validate page functionality
    cy.url().should('include', '/subject/') // Check if URL includes '/subject/'

    // Test case 1: Check if the URL includes '/subject/'
    cy.url().should('include', '/subject/') 

    // Test case 2: Check if the page has loaded successfully
    cy.get('.subject-title').should('be.visible')

    // Test case 3: Check if the grade level is displayed correctly
    cy.get('.grade-level').should('contain', 'Grade ' + gradeLevel)

    // Test case 4: Check if the subject cards are visible
    cy.get('.subject-card').should('be.visible')

    // Test case 5: Check if the subject cards are clickable
    cy.get('.subject-card').first().click()
    cy.url().should('include', '/course/') // Check if URL includes '/course/'
  })
})
