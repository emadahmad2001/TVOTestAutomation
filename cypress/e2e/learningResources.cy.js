describe('Learning Resources Tests', () => {
  beforeEach(() => {
    cy.visit('https://tvolearn.com/');
  });

  it('Should navigate to Learning Resources and choose a Grade level', () => {
    cy.navigateToLearningResources();
    const gradeLevel = Cypress._.random(1, 12);
    cy.chooseGradeLevel(gradeLevel);

    // Scroll down to "Learn Forward in the Curriculum" section and click any card
    cy.contains('Learn Forward in the Curriculum').scrollIntoView();
    cy.get('.card-body').eq(0).click({force: true}); // Clicking on the first card

    // Validate page functionality
    cy.url().should('include', '/subject/');

    // Test case 1: Check if the URL includes '/subject/'
    cy.url().should('include', '/subject/');

    // Test case 2: Check if the page has loaded successfully
    cy.get('.subject-title').should('be.visible');

    // Test case 3: Check if the grade level is displayed correctly
    cy.get('.grade-level').should('contain', 'Grade ' + gradeLevel);

    // Test case 4: Check if the subject cards are visible
    cy.get('.subject-card').should('be.visible');

    // Test case 5: Check if the subject cards are clickable
    cy.get('.subject-card').first().click({force: true});
    cy.url().should('include', '/course/')
    
    const subjectName = 'Mathematics'; // Change this to the subject name you want to click on
    cy.get('.button-subject-name').contains(subjectName)
      .parentsUntil('.shg-row')
      .find('.button-subject-link')
      .click({force: true});
  });
});