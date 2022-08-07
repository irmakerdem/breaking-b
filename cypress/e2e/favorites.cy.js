describe('Favorites Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(4) > a > .character-image').click()
    cy.get('.empty-heart').click();
    cy.get('.go-favorites').click();
  })

  it('Should display favorited characters', () => {
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h1').contains('Breaking Bad');
    cy.get('h2').contains('Favorite Characters');
    cy.get('.go-home').contains('GO HOME');
    cy.get('.app-main').find('.card').should('have.length', '1')
    cy.contains('Carmen Molina').should('be.visible');
  })

  it('Should be able to go back to Details Page when clicking favorited character', () => {
    cy.get('.character-image').click();
    cy.url().should('eq', 'http://localhost:3000/details/Carmen%20Molina');
  })

  it('Should be able to go back to the Home Page when clicking page title', () => {
    cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the Home Page when clicking GO HOME button', () => {
    cy.get('.go-home').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})
 })