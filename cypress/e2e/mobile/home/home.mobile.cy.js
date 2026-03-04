describe('Home Page - Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/');
  });

  it('displays the main heading and intro', () => {
    cy.get('[data-testid="home-heading"]').should('be.visible');
    cy.get('[data-testid="home-intro"]').should('be.visible');
  });

  it('shows navigation links in the header', () => {
    cy.get('[data-testid="header"]').within(() => {
      cy.get('[data-testid="header-home-link"]').should('be.visible');
      cy.get('[data-testid="header-about-link"]').should('be.visible');
      cy.get('[data-testid="header-contact-link"]').should('be.visible');
      cy.get('[data-testid="header-skills-link"]').should('be.visible');
      cy.get('[data-testid="header-projects-link"]').should('be.visible');
      cy.get('[data-testid="header-resume-link"]').should('be.visible');
    });
  });

  it('has no horizontal scroll', () => {
    cy.document().then((doc) => {
      const html = doc.documentElement;
      expect(html.scrollWidth).to.be.lte(html.clientWidth + 1);
    });
  });
});
