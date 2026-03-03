// cypress/e2e/mobile/about/about.mobile.cy.js

describe('About Page (Mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/about');
  });

  it('displays the About Me heading', () => {
    cy.contains('h1', "About Me").should('be.visible');
    cy.get('img[alt="Profile photo"]').should('be.visible');
  });

  it('shows the Background section', () => {
    cy.contains('h2', 'Background').should('be.visible');
    cy.contains('With a strong foundation in both front-end and back-end technologies').should('be.visible');
  });

  it('shows the Interests & Hobbies section', () => {
    cy.contains('h2', 'Interests & Hobbies').should('be.visible');
  });

  it('expands a hobby disclosure and shows favorites', () => {
    cy.contains('button', 'Video Games').click();
    cy.contains('Favorites:').should('be.visible');
    cy.contains("The Legend of Zelda Majora's mask").should('be.visible');
  });
});
