import userData from "../../fixtures/users/userData.json"
import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()


describe('Login RWA Tests', () => {
    
    it('Login - Success', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/');        
    })

    it('Login - Fail', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userFail.username, userData.userFail.password);
        loginPage.checkInvalidLogin();
    })
})
