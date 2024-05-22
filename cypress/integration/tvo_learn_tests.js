describe('TVO Learn Automated Tests', () => {
    beforeEach(() => {
      cy.visit('https://tvolearn.com/')
    })
  
    it('Visit Homepage Test', () => {
      // Check if home page loads 
      cy.url().should('eq', 'https://tvolearn.com/')
    })
  
    it('Learning Resources Dropdown Test', () => {
      cy.get('.site-nav--has-dropdown').contains('Learning Resources (K-12)').click()
  
      // Check if dropdown menu exists
      cy.get('.dropdown-menu').should('exist')
    })
  
    it('Choose Grade Level Test', () => {
      cy.get('.site-nav--has-dropdown').contains('Learning Resources (K-12)').click()
      const gradeLevel = Cypress._.random(1, 12)
      cy.contains('.dropdown-menu', 'Grade ' + gradeLevel).click()
  
      // check if election of grade is successful
      cy.contains('.site-nav__label', 'Grade ' + gradeLevel).should('be.visible')
    })
  
    it('Scroll to Learn Forward Section Test', () => {

      cy.contains('Learn Forward in the Curriculum').scrollIntoView()
  
      // check if "Learn Forward in the Curriculum" section is visible
      cy.get('.curriculum-section').should('be.visible')
    })
  
    it('Click on Subject Card Test', () => {
      cy.contains('Learn Forward in the Curriculum').scrollIntoView()
      
      // Click on any card within that section representing subjects
      cy.get('.card-body').eq(0).click()
  
      // Verify that the click action is successful
      cy.url().should('include', '/subject/')
    })
  
    it('Subject Page URL Test', () => {
      // Click on any card within that section representing subjects
      cy.get('.card-body').eq(0).click()
  
      // Validate that clicking on a subject card navigates to the corresponding subject page
      cy.url().should('include', '/subject/')
    })
  
    it('Subject Page Content Test', () => {
      cy.get('.subject-title').should('be.visible')
      cy.get('.subject-description').should('be.visible')
      cy.get('.subject-resources').should('be.visible')
    })
  
    it('Grade Level Display Test', () => {
      // check that the selected grade level is correctly displayed on the subject page
      cy.get('.grade-level').should('contain', 'Grade ' + gradeLevel)
    })
  
    it('Subject Cards Visibility Test', () => {
      // check if subject cards are visible on the subject page
      cy.get('.subject-card').should('be.visible')
    })
  
    it('Subject Cards Clickability Test', () => {
      cy.get('.subject-card').first().click()
      cy.url().should('include', '/course/')
    })
  })
  