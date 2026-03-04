// cypress/e2e/mobile/about/about.mobile.cy.js

describe('About Page (Mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/about');
  });

  it('displays the About Me heading', () => {
    cy.get('[data-testid="about-heading"]').should('be.visible');
    cy.get('[data-testid="about-profile-image"]').should('be.visible');
  });

  it('shows the Background section', () => {
    cy.get('[data-testid="about-background-title"]').should('be.visible');
    cy.get('[data-testid="about-background-desc1"]').should('be.visible');
  });

  it('shows the Interests & Hobbies section', () => {
    cy.get('[data-testid="about-hobbies-title"]').should('be.visible');
    cy.get('[data-testid="about-hobbies-list"]').should('be.visible');
  });

  it('expands a hobby disclosure and shows favorites', () => {
    cy.get('[data-testid="hobby-disclosure-button"]').contains('Video Games').click();
    cy.get('[data-testid="hobby-favorites-title"]').should('be.visible');
    // this contains works for now because quite frankly, that's my favorite game of all time. It will always be in
    // the list. Professionally speaking though, once i implement the spring boot backend, i will move this data to
    // the backend and update all tests to utilize mocks.
    cy.get('[data-testid="hobby-favorite"]').contains("The Legend of Zelda Majora's mask")
        .should('be.visible');
  });
});
