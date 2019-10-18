import "@applitools/eyes-cypress/commands";

describe("Hello world", () => {
  it("works", () => {
    cy.visit("https://applitools.com/helloworld?diff1");

    cy.eyesOpen({
      appName: "Netspend Website",
      testName: "Home Page",
      browser: [{ width: 1024, height: 768, name: "chrome" }]
    });

    cy.eyesCheckWindow("Main Page");

    cy.eyesClose();
  });
});

describe("Hello world2", () => {
  it("works", () => {
    cy.visit("https://applitools.com/helloworld?diff1");

    cy.eyesOpen({
      appName: "Netspend Website",
      testName: "Home Page",
      browser: [{ width: 1024, height: 768, name: "chrome" }]
    });

    cy.eyesCheckWindow("Main Page");

    cy.eyesClose();
  });
});
