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

    it.only('Enviar dinheiro com saldo suficiente', () => {
        transferPage.accessTransactionPage();
        transferPage.clickFirstUser();
        // transactionPage.sendMoneyWithSufficientBalance();
        // transactionPage.checkTransactionSuccess();
    });

    it('Enviar dinheiro com saldo insuficiente', () => {
        // transactionPage.accessTransactionPage();
        // transactionPage.sendMoneyWithInsufficientBalance();
        // transactionPage.checkTransactionFailure();
    });

})
