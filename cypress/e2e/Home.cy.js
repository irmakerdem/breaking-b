describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000/');
    cy.get('.BB-logo').should('be.visible');
  })

  it('Should display the title, a button, and a list of characters', () => {
    cy.get('li').contains('GO TO FAVORITES');
    cy.get('.app-main').find('.card').should('have.length', '3');
    cy.contains('Bogdan Wolynetz').should('be.visible');
    cy.get(':nth-child(1) > a > .character-image').should('be.visible');
    cy.contains('Lydia Rodarte-Quayle').should('be.visible');
    cy.get(':nth-child(2) > a > .character-image').should('be.visible');
    cy.contains('Carmen Molina').should('be.visible');
    cy.get(':nth-child(3) > a > .character-image').should('be.visible');
  })

  it('Should be able to go back to the home page when clicking page title', () => {
    cy.get('.BB-logo').click();
		cy.url().should('eq', 'http://localhost:3000/');
  })

})