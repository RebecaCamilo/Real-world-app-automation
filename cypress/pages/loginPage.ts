class LoginPage {
    
    selectorsList() {
        return {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: '[data-test="signin-submit"]',
            wrongCredentialAlert: '[data-test="signin-error"]'
        }
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUsernameAndPassword(username: string, password: string) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()        
    }

    checkInvalidLogin() {
        cy.get(this.selectorsList().wrongCredentialAlert)       
    }
}

export default LoginPage
