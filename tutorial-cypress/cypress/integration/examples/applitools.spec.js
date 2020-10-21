describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://applitools.com/');
    cy.eyesOpen({
      appName: 'Applitools1',
      testName: 'Github Cypress Integration',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Login Page');
    cy.eyesClose();
  });
});
