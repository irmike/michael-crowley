describe('Contact Page - Mobile', () => {
  beforeEach(() => {
	cy.viewport('iphone-6');
	cy.visit('/contact');
  });

  it('renders contact title and links on mobile', () => {
	cy.get('[data-testid="contact-title"]').should('be.visible');
	cy.contains('GitHub:').should('be.visible');
	cy.contains('LinkedIn:').should('be.visible');
  });

  it('has no horizontal overflow on mobile', () => {
	cy.document().then((doc) => {
	  const html = doc.documentElement;
	  expect(html.scrollWidth).to.be.lte(html.clientWidth + 1);
	});
  });
});

