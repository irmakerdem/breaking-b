describe('Error Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://breakingbadapi.com/api/characters?category=Breaking+Bad', {fixture : 'getMockData.json'});
    cy.visit('http://localhost:3000/turtle');
    cy.get('h1').contains('Breaking Bad');
  })

  it('Should display an error message', () => {
    cy.get('.error-messaging').contains('Oopsies! 🤡 This page does not exist');
    cy.get('p').contains('Please return to the home page using the link above.');
  })

  it('Should be able to go back to the home page when clicking page title', () => {
    cy.get('h1').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})

})