class RegisterPage {
    
    selectorsList() {
        return {
            firstNameField: '#firstName',
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

    accessRegisterPage() {
        cy.visit('/signup');
    }

    fillUser(firstName: string, lastName: string, username: string, password: string, confirmPassword: string) {
        cy.get(this.selectorsList().firstNameField).type(firstName);
        cy.get(this.selectorsList().lastNameField).type(lastName);
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
    }

    registerEmptyUser() {
        cy.get(this.selectorsList().firstNameField).click();
        cy.get(this.selectorsList().lastNameField).click();
        cy.get(this.selectorsList().usernameField).click();
        cy.get(this.selectorsList().passwordField).click();
        cy.get(this.selectorsList().confirmPasswordField).click().invoke('blur');
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

export default RegisterPage
