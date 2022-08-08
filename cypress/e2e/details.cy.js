describe('Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000/');
    cy.get('.BB-logo').should('be.visible');
    cy.get(':nth-child(2) > a > .character-image').click();
  })

  it('Should display the logo, two buttons, an icon, an image, and a list of character\s details', () => {
    cy.url().should('eq', 'http://localhost:3000/details/Lydia%20Rodarte-Quayle');
    cy.get('.fav-but').contains('GO TO FAVORITES');
    cy.get('.home-but').contains('GO HOME');
    cy.get('.details-card-image').should('be.visible');
    cy.get('.empty-heart').should('be.visible');
    cy.get('.details-details-container').contains('Name: Lydia Rodarte-Quayle');
    cy.get('.details-details-container').contains('Nickname: Lydia');
    cy.get('.details-details-container').contains('Occupation: Executive at Madrigal');
    cy.get('.details-details-container').contains('Status: Deceased');
    cy.get('.details-details-container').contains('Portrayed By: Laura Fraser');
  })

  it('Should be able to favorite a character', () => {
    cy.get('.empty-heart').click();
    cy.get('.full-heart').should('be.visible');
  })

  it('Should be able to unfavorite a character', () => {
    cy.get('.empty-heart').click();
    cy.get('.full-heart').should('be.visible');
    cy.get('.full-heart').click();
    cy.get('.empty-heart').should('be.visible');
  })

  it('Should be able to go back to the Home Page when clicking page logo', () => {
    cy.get('.BB-logo').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the Home Page when clicking GO HOME button', () => {
    cy.get('.home-but').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the Favorites Page when clicking GO TO FAVORITES button', () => {
    cy.get('.fav-but').click();
		cy.url().should('eq', 'http://localhost:3000/favorites');
	})

})