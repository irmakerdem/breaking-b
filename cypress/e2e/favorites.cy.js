describe('Favorites Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000/favorites');
  })

  it('Should display favorited characters', () => {
    cy.get('h1').contains('Breaking Bad');
    cy.get('.go-home').contains('GO HOME');
    cy.contains('Lydia Rodarte-Quayle').should('be.visible');
  })

  it('Should be able to go back to details page when clicking favorited character', () => {
    cy.get('.empty-heart').click();
  })

  it('Should be able to go back to the home page when clicking page title', () => {
    cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the home page when clicking GO HOME button', () => {
    cy.get('.go-home').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})
 })