describe('Contact Page - Desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/contact');
  });

  it('displays contact heading and key info', () => {
    cy.get('[data-testid="contact-title"]').should('be.visible');
    cy.contains('Name:').should('be.visible');
    cy.contains('Email:').should('be.visible');
    cy.contains('Phone:').should('be.visible');
  });

  it('shows GitHub and LinkedIn links with expected targets', () => {
    cy.contains('GitHub:')
      .parent()
      .find('a')
      .should('have.attr', 'href')
      .and('include', 'github.com');

    cy.contains('LinkedIn:')
      .parent()
      .find('a')
      .should('have.attr', 'href')
      .and('include', 'linkedin.com');
  });

  it('keeps the contact wrapper centered on desktop', () => {
    cy.get('[data-testid="contact-page-wrapper"]').should('be.visible');
    cy.get('[data-testid="contact-page-wrapper"]').should('have.class', 'mx-auto');
  });
});

