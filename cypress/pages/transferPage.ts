class TransferPage {
    
    selectorsList() {
        return {
            newTransaction: '[data-test="nav-top-new-transaction"]',
            lastNameField: '#lastName',
            usernameField: '#username',
            passwordField: '#password',
            confirmPasswordField: '#confirmPassword',
            registerButton: '[data-test="signup-submit"]',
            genericWrongCredentialAlert: '.MuiFormHelperText-root',
            totalFields: 5,
            shortPasswordAlert: '#password-helper-text',
            differentPasswordAlert: '#confirmPassword-helper-text'
        }
    }

    accessTransactionPage() {
        cy.get(this.selectorsList().newTransaction).click();

    }
    
    clickFirstUser() {
        cy.get('[data-test="user-list-item-GjWovtg2hr"]').click();
    }

    typeValue() {
        cy.get('[data-test="sidenav-user-balance"]');
        cy.get('#amount').type()
    }

    accessRegisterPage() {
        cy.visit('/signup');
    }

    sendFormToRegisterUser() {
        cy.get(this.selectorsList().registerButton).click();
    }

    checkInvalidRegisterByEmptyUser() {
        cy.get(this.selectorsList().genericWrongCredentialAlert).should('have.length', this.selectorsList().totalFields);      
    }

    checkInvalidRegisterByShortPassword() {
        cy.get(this.selectorsList().shortPasswordAlert).should('exist');
    }

    checkDifferentPasswords() {
        cy.get(this.selectorsList().differentPasswordAlert).should('exist');    
    }
}

export default TransferPage
