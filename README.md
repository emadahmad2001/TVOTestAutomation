# TVO Learn Test Automation

This repository contains automated tests written in Cypress for testing the TVO Learn website.

## Test Approach

The test approach involves automating the navigation to the Learning Resources section, selecting a random grade level, and validating various aspects of the page functionality.

## Test Cases Covered

1. **Navigation to Learning Resources:** Ensure that the Learning Resources dropdown exists and can be accessed.
2. **Select Grade Level:** Randomly select a grade level between 1 and 12 from the dropdown menu.
3. **Navigate to Subject Page:** Click on a card in the "Learn Forward in the Curriculum" section and validate that the URL includes '/subject/'.
4. **Page Loading:** Verify that the subject page has loaded successfully by checking for the presence of the subject title.
5. **Grade Level Display:** Confirm that the selected grade level is correctly displayed on the page.
6. **Subject Cards Visibility:** Check if the subject cards are visible on the page.
7. **Subject Cards Clickable:** Ensure that the subject cards are clickable and navigate to the corresponding course page.

## Assumptions Made

1. The TVO Learn website is accessible and functional.
2. The Learning Resources dropdown menu and the "Learn Forward in the Curriculum" section are always available and accessible.
3. The structure and layout of the subject page remain consistent.
4. All subject cards are visible and clickable.
5. The website does not undergo significant changes during the testing period.

## Files

### `commands.js`

This file contains custom Cypress commands that are used across multiple test cases. These commands encapsulate reusable actions to interact with elements on the webpage, making test code more readable and maintainable.

### `learningResources.cy.js`

This file contains tests related to learning resources functionality on the TVO Learn website. It includes test cases to navigate to learning resources, choose a grade level, scroll to the "Learn Forward in the Curriculum" section, click on subject cards, and validate functionality on the subject page.

### `TVO_learn_tests.js`

This file contains a suite of tests covering various aspects of the TVO Learn website. It includes tests for visiting the homepage, navigating learning resources dropdown, choosing a grade level, scrolling to the "Learn Forward in the Curriculum" section, clicking on subject cards, validating subject page URL and content, and testing grade level display and subject card visibility and clickability.

## Summary

The test automation suite covers essential functionalities of the TVO Learn website, including navigation, grade level selection, and subject page validation. Test cases focus on ensuring the correctness of page URLs, displaying grade levels, and the visibility and clickability of subject cards. Execution results are expected to confirm the successful navigation and validation of each test case.
