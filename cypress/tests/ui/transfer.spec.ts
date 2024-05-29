import userData from "../../fixtures/users/userData.json"
import LoginPage from "../../pages/loginPage"
import TransferPage from "../../pages/transferPage"

const loginPage = new LoginPage();
const transferPage = new TransferPage();


describe('Transaction RWA Tests', () => {

    beforeEach(() => {
        // Realizar login antes de cada teste de transação
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/'); 
    });

    it('Enviar dinheiro com saldo suficiente', () => {
        transferPage.accessTransactionPage();
        transferPage.clickFirstUser();
        transferPage.sendMoneyWithSufficientBalance();
        transferPage.checkIfTransferSuccess();
    });

    it('Enviar dinheiro com saldo insuficiente', () => {
        transferPage.accessTransactionPage();
        transferPage.clickFirstUser();
        transferPage.sendMoneyWithNotSufficientBalance();
        transferPage.checkIfTransferFail();
    });

})
