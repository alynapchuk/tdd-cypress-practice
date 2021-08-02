describe('Creating a message', () => {
    it('Displays the message in the list', () => {

        // Test visiting the site
        cy.visit('http://localhost:3000');

        // Test entering text
        cy.get('[data-testid="messageText"]')
            .type('New message');

        // Test send button
        cy.get('[data-testid="sendButton"]')
            .click();

        // Test message clearing out
        cy.get('[data-testid="messageText"]')
            .should('have.value', '');

        // Test message appearing
        cy.contains('New message');
    });
});