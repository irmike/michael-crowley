describe('Home Page - Desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // Standard desktop size
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

describe('UpdateLog on Home Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // Standard desktop size
    cy.visit('/');
  });

  it('shows the most recent update by default', () => {
    cy.get('[data-testid="recent-updates-section"]').within(() => {
      cy.get('[data-testid="update-title"]').first().should('be.visible');
      cy.get('[data-testid="update-disclosure-button"]').first().click();
      cy.get('[data-testid="update-description"]').should('be.visible');
    });
  });

  it('expands and collapses past updates', () => {
    cy.get('[data-testid="recent-updates-section"]').within(() => {
      cy.get('[data-testid="update-log-past-updates-toggle"]').click();
    });
    cy.get('[data-testid="update-title"]').contains('Initial Site Launch', { timeout: 5000 }).should('be.visible');
    cy.get('[data-testid="recent-updates-section"]').within(() => {
      cy.get('[data-testid="update-log-past-updates-toggle"]').click();
    });
    cy.get('[data-testid="update-title"]').contains('Initial Site Launch').should('not.exist');
  });

  it('shows all details for the most recent update when expanded', () => {
    cy.get('[data-testid="recent-updates-section"]').within(() => {
      cy.get('[data-testid="update-title"]').first().click();
      cy.get('[data-testid="update-details-list"]').within(() => {
        cy.get('[data-testid^="update-detail-"]').should('exist');
      });
    });
  });

  it('shows the most recent update date first in the update log', () => {
    cy.get('[data-testid="recent-updates-section"]').within(() => {
      cy.get('[data-testid="update-log-past-updates-toggle"]').click();
      cy.get('[data-testid="update-date"]').should('have.length.gte', 2).then($dates => {
        const firstDate = $dates[0].textContent.trim();
        const secondDate = $dates[1].textContent.trim();
        const first = new Date(firstDate);
        const second = new Date(secondDate);
        expect(first.getTime()).to.be.greaterThan(second.getTime());
      });
    });
  });
});
