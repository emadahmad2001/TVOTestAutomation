// This is a test suite for TVO Learn website
describe('TVO Learn Automated Tests', () => {
  // Before each test, visit the TVO Learn website
  beforeEach(() => {
    cy.visit('https://tvolearn.com/');
  });

  // Test 1: Visit Homepage Test
  it('Visit Homepage Test', () => {
    // Check if home page loads 
    cy.url().should('eq', 'https://tvolearn.com/');
  });

  // Test 2: Learning Resources Dropdown Test
  it('Learning Resources Dropdown Test', () => {
    // Navigate to the "Learning Resources (K-12)" dropdown from the header
    cy.navigateToLearningResources();
    
    // Check if dropdown menu exists
    cy.get('.site-nav--has-dropdown').should('exist');
  });

  // Test 3: Choose Grade Level Test
  it('Choose Grade Level Test', () => {
    // Choose a random grade level between 1 and 12
    const gradeLevel = Cypress._.random(1, 12);
    cy.chooseGradeLevel(gradeLevel);
    
    // Check if selection of grade is successful
    cy.contains('.site-nav__label', 'Grade ' + gradeLevel).should('be.visible');
  });

  // Test 4: Scroll to Learn Forward Section Test
  it('Scroll to Learn Forward Section Test', () => {
    // Scroll down to the "Learn Forward in the Curriculum" section
    cy.contains('Learn Forward in the Curriculum').scrollIntoView();
    
    // Check if "Learn Forward in the Curriculum" section is visible
    cy.get('.shogun-heading-component').should('be.visible');
  });

  // Test 5: Click on Subject Card Test
  it('Click on Subject Card Test', () => {
    // Scroll down to the "Learn Forward in the Curriculum" section
    cy.contains('Learn Forward in the Curriculum').scrollIntoView();
      
    // Click on any card within that section representing subjects
    cy.get('.card-body').eq(0).click({force: true});
    
    // Verify that the click action is successful
    cy.url().should('include', '/subject/');
  });

  // Test 6: Subject Page URL Test
  it('Subject Page URL Test', () => {
    // Click on any card within that section representing subjects
    cy.get('.card-body').eq(0).click({force: true});
    
    // Validate that clicking on a subject card navigates to the corresponding subject page
    cy.url().should('include', '/subject/');
  });

  // Test 7: Subject Page Content Test
  it('Subject Page Content Test', () => {
    // Check if subject title, description, and resources are visible on the subject page
    cy.get('.subject-title').should('be.visible');
    cy.get('.subject-description').should('be.visible');
    cy.get('.subject-resources').should('be.visible');
  });

  // Test 8: Grade Level Display Test
  it('Grade Level Display Test', () => {
    // Choose a random grade level between 1 and 12
    const gradeLevel = Cypress._.random(1, 12);
    cy.chooseGradeLevel(gradeLevel);
    
    // Check that the selected grade level is correctly displayed on the subject page
    cy.get('.grade-level').should('contain', 'Grade ' + gradeLevel);
  });

  // Test 9: Subject Cards Visibility Test
  it('Subject Cards Visibility Test', () => {
    // Check if subject cards are visible on the subject page
    cy.get('.subject-card').should('be.visible');
  });

  // Test 10: Subject Cards Clickability Test
  it('Subject Cards Clickability Test', () => {
    // Click on any card within that section representing subjects
    cy.get('.card-body').eq(0).click({force: true});
    
    // Verify that clicking on a subject card navigates to the corresponding subject page
    cy.url().should('include', '/course/');
  });
});
