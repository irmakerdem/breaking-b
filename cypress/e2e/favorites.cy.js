describe('Favorites Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000');
    cy.get('.BB-logo').should('be.visible');
    cy.get(':nth-child(3) > a > .character-image').click();
    cy.get('.empty-heart').click();
    cy.get('.fav-but').click();
  })

  it('Should display favorited characters', () => {
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h2').contains('Favorite Characters');
    cy.get('.home-but').contains('GO HOME');
    cy.get('.app-main').find('.card').should('have.length', '1');
    cy.contains('Carmen Molina').should('be.visible');
  })

  it('Should be able to go back to Details Page when clicking favorited character', () => {
    cy.get('.character-image').click();
    cy.url().should('eq', 'http://localhost:3000/details/Carmen%20Molina');
  })

  it('Should be able to go back to the Home Page when clicking page logo', () => {
    cy.get('.BB-logo').should('be.visible').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the Home Page when clicking GO HOME button', () => {
    cy.get('.home-but').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

})