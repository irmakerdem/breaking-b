describe('Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(3) > a > .character-image').click()
  })

  it('Should display the title, two buttons, a heart, an image, and a list of character\s details', () => {
    cy.url().should('eq', 'http://localhost:3000/details/Lydia%20Rodarte-Quayle');
    cy.get('h1').contains('Breaking Bad');
    cy.get('.go-favorites').contains('GO TO FAVORITES');
    cy.get('.go-home').contains('GO HOME');
    cy.get('.details-card-image').should('be.visible');
    cy.get('.empty-heart').should('be.visible');
    cy.get('.details-card').contains('Name: Lydia Rodarte-Quayle');
    cy.get('.details-card').contains('Nickname: Lydia');
    cy.get('.details-card').contains('Occupation: Executive at Madrigal');
    cy.get('.details-card').contains('Status: Deceased');
    cy.get('.details-card').contains('Portrayed By: Laura Fraser');
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

  it('Should be able to go back to the home page when clicking page title', () => {
    cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

  it('Should be able to go back to the home page when clicking GO HOME button', () => {
    cy.get('.go-home').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

})