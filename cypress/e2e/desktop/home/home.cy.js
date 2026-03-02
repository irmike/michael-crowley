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

describe('UpdateLog on Home Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // Standard desktop size
    cy.visit('/');
  });

  it('shows the most recent update by default', () => {
    cy.get('.update-log-container').within(() => {
      cy.contains('Mobile Display Fix').should('be.visible');
      cy.contains('button', 'expand').first().click();
      cy.contains('Improved mobile responsiveness for all pages and components.').should('be.visible');
    });
  });

  it('expands and collapses past updates', () => {
    cy.get('.update-log-container').within(() => {
      cy.contains('Show More Updates').click();
    });
    cy.contains('Initial Site Launch', { timeout: 5000 }).should('be.visible');
    cy.get('.update-log-container').within(() => {
      cy.contains('Hide Past Updates').click();
    });
    cy.contains('Initial Site Launch').should('not.exist');
  });

  it('shows all details for the most recent update when expanded', () => {
    cy.get('.update-log-container').within(() => {
      cy.contains('Mobile Display Fix').click();
      cy.contains('Made SidebarDisplay fully mobile-friendly').should('be.visible');
      cy.contains('Created UpdateLog component for home page').should('be.visible');
    });
  });
});
