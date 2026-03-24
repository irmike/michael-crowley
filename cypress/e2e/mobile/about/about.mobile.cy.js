// cypress/e2e/mobile/about/about.mobile.cy.js

describe('About Page (Mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/about');
  });

  it('displays the About Me heading', () => {
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
    cy.get('[data-testid="disclosure-card-button-video-games"]').click();
    cy.get('[data-testid="favorites-title"]').should('be.visible');
    cy.get('[data-testid="hobby-favorite"]').contains("The Legend of Zelda Majora's mask")
        .should('be.visible');
  });
});
