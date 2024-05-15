import userData from "../../fixtures/users/userData.json"
import RegisterPage from "../../pages/registerPage"
import LoginPage from "../../pages/loginPage"

const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const differentUsername = userData.userSuccess.username + Math.floor(Math.random() * (101));


describe('Login RWA Tests', () => {
    
    it('Register - Success', () => {
        registerPage.accessRegisterPage();
        registerPage.fillUser(userData.userSuccess.firstName, userData.userSuccess.lastName, differentUsername, userData.userSuccess.password, userData.userSuccess.password);
        registerPage.sendFormToRegisterUser();
        cy.location('pathname').should('equal', '/signin');

        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(differentUsername, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/');      
    })

    it('Register - Fail by empty user', () => {
        registerPage.accessRegisterPage();
        registerPage.registerEmptyUser();
        registerPage.checkInvalidRegisterByEmptyUser();
    })

    it('Register - Fail by short password', () => {
        registerPage.accessRegisterPage();
        registerPage.fillUser(userData.shortPasswordUser.firstName, userData.shortPasswordUser.lastName, userData.shortPasswordUser.username, userData.shortPasswordUser.password, userData.shortPasswordUser.confirmPassword);
        registerPage.checkInvalidRegisterByShortPassword();
    })

    it('Register - Fail by different password', () => {
        registerPage.accessRegisterPage();
        registerPage.fillUser(userData.differentPasswordsUser.firstName, userData.differentPasswordsUser.lastName, userData.differentPasswordsUser.username, userData.differentPasswordsUser.password, userData.differentPasswordsUser.confirmPassword);
        registerPage.checkDifferentPasswords();
    })
})
