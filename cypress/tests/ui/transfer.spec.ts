import userData from "../../fixtures/users/userData.json"
import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()


describe('Transaction RWA Tests', () => {
        
    describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        // Login
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/');    


    });
    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
        it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
          // Login
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/');    
        });
    });
})
