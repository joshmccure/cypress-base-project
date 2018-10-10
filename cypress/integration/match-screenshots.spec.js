describe('Screenshot Example', () => {

  it('Google Homepage', () => {
    cy.visit(`https://images.google.com.au`);
    cy.matchScreenshot('Google Australia home');
  });

});
