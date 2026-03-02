describe('Home Page - Desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // Standard desktop size
    cy.visit('/');
  });

  it('displays the main heading and intro', () => {
    cy.contains('h1', /welcome|resume|michael crowley/i);
  });

  it('shows navigation links in the header', () => {
    cy.get('header').within(() => {
      cy.contains('Home');
      cy.contains('About');
      cy.contains('Contact');
      cy.contains('Skills');
      cy.contains('Projects');
      cy.contains('Resume');
    });
  });

  it('has no horizontal scroll', () => {
    cy.document().then((doc) => {
      const html = doc.documentElement;
      expect(html.scrollWidth).to.be.lte(html.clientWidth + 1);
    });
  });
});

