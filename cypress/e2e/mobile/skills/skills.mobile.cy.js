describe('Skills Page - Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('/skills');
  });

  it('stacks sidebar and content vertically on mobile', () => {
    cy.get('[data-testid="sidebar-display"]').should('have.css', 'flex-direction', 'column');

    cy.get('[data-testid="sidebar-display"] aside').then(($aside) => {
      const asideBottom = $aside[0].getBoundingClientRect().bottom;

      cy.get('[data-testid="sidebar-display"] > div').then(($contentPanel) => {
        const contentTop = $contentPanel[0].getBoundingClientRect().top;
        expect(contentTop).to.be.greaterThan(asideBottom - 1);
      });
    });
  });

  it('wraps certificate buttons instead of stretching them full width', () => {
    cy.get('[data-testid="sidebar-nav-button-certificates"]').click();

    cy.get('[data-testid="certificates-section"]')
      .find('[data-testid^="certificate-button-"]')
      .should('have.length.greaterThan', 1)
      .then(($buttons) => {
        const tops = Array.from($buttons).map((button) => Math.round(button.getBoundingClientRect().top));
        const uniqueRows = new Set(tops);
        expect(uniqueRows.size).to.be.greaterThan(1);

        const viewportWidth = Cypress.config('viewportWidth');
        Array.from($buttons).forEach((button) => {
          const width = button.getBoundingClientRect().width;
          expect(width).to.be.lessThan(viewportWidth * 0.95);
        });
      });
  });
});

