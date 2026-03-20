describe('Skills Page - Desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/skills');
  });

  it('should display the main title', () => {
    cy.get('[data-testid="skills--tech-stack-title"]').should('contain', 'Skills / Tech Stack');
  });

  it('should display sidebar navigation items', () => {
    cy.get('[data-testid="sidebar-display"]').should('exist');
    cy.get('[data-testid="sidebar-display"]').contains('Skills').should('exist');
    cy.get('[data-testid="sidebar-display"]').contains('Certificates').should('exist');
  });

  it('should render the skills section and accordian', () => {
    cy.get('[data-testid="skills-section"]').should('exist');
    cy.get('[data-testid="skills-accordian"]').should('exist');
    cy.get('[data-testid^="skills-accordian-section-"]').should('have.length.greaterThan', 0);
    cy.get('[data-testid^="skill-button-"]').should('have.length.greaterThan', 0);
  });

  it('should render certificates section and category headers', () => {
    cy.get('[data-testid="sidebar-display"]').contains('Certificates').click();
    cy.get('[data-testid="certificates-section"]').should('exist');
    cy.get('[data-testid="certificates-section"]').should('have.length.greaterThan', 0);
    cy.get('[data-testid^="certificate-button-"]').should('have.length.greaterThan', 0);
  });
});

