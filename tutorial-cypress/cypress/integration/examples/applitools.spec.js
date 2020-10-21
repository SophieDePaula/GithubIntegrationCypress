describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://applitools.com/');
    cy.eyesOpen({
      appName: 'Applitools1',
      testName: 'Github Cypress Integration'
    });
    cy.eyesCheckWindow('Login Page');
    cy.eyesClose();
  });
});
