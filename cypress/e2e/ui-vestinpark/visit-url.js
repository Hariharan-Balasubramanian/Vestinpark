describe('VestinPark UI Testing', () => {

  it('Vestinpark URL Validation', () => {
    cy.fixture('/common/login_and_URL').then((data) => {
      cy.CacheCookies();
      cy.visit(data.url);
      cy.url().should('eq', data.url)
      cy.get("body>main>header>div:nth-of-type(2)>nav>div>div:nth-of-type(2)>ul>li:nth-of-type(2)>a").click();
      cy.url().should('include', '/Room');
      cy.contains("Deluxe").should('be.visible')
      cy.contains("Deluxe suite").should('be.visible')
      cy.contains("vestin suite").should('be.visible')
    });
  });
});