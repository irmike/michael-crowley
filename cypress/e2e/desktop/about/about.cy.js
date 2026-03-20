// cypress/e2e/desktop/about/about.cy.js

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('displays the About Me section', () => {
    cy.get('[data-testid="about-me-title"]').should('be.visible');
    cy.get('[data-testid="about-profile-image"]').should('be.visible');
  });
  
  it('shows the Background section', () => {
    cy.get('[data-testid="background-title"]').should('be.visible');
    cy.get('[data-testid="about-background-desc1"]').should('be.visible');
  });

  it('shows the Interests & Hobbies section', () => {
    cy.get('[data-testid="interests--hobbies-title"]').should('be.visible');
    cy.get('[data-testid="about-hobbies-list"]').should('be.visible');
  });

  it('expands a hobby disclosure and shows favorites', () => {
    cy.get('[data-testid="hobby-disclosure-button"]').contains('Video Games').click();
    cy.get('[data-testid="hobby-favorites-title"]').should('be.visible');
    cy.get('[data-testid="hobby-favorite"]').contains("The Legend of Zelda Majora's mask").should('be.visible');
  });
});
