describe('Home Page', () => {
  it('should display the welcome message', () => {
    cy.visit('/');
    cy.contains("Welcome, I'm Michael").should('be.visible');
    cy.contains('Full Stack Developer').should('be.visible');
  });

  it('should display the featured project card', () => {
    cy.visit('/');
    cy.contains('Featured Project').should('be.visible');
    cy.contains('Arc Raiders Stat Tester').should('be.visible');
  });

  it('should have navigation buttons', () => {
    cy.visit('/');
    cy.contains('View All Skills').should('be.visible');
    cy.contains('All Projects').should('be.visible');
    cy.contains('Download Resume').should('be.visible');
    cy.contains('Contact Me').should('be.visible');
  });
});

