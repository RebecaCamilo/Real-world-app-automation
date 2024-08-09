import userData from "../../fixtures/users/userData.json"
import LoginPage from "../../pages/loginPage"
import TransactionalHistoryPage from "../../pages/transactionalHistoryPage"

const loginPage = new LoginPage();
const transactionalHistoryPage = new TransactionalHistoryPage();

describe('Transaction History Tests', () => {

    beforeEach(() => {
        // Realizar login antes de cada teste de transação
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.userSuccess.username, userData.userSuccess.password);
        cy.location('pathname').should('equal', '/'); 
    });

    it('Visualizar histórico de transações com sucesso', () => {
        //Deve exibir o histórico de transações de um usuário corretamente
        transactionalHistoryPage.accessMyTransactionsPage();
        transactionalHistoryPage.checkIfTransferExists();
        
    });

    it('Tentar visualizar o histórico de transações sem transações anteriores', () => {
        //Deve exibir uma mensagem indicando que o usuário não possui transações anteriores
        transactionalHistoryPage.accessMyTransactionsPage();
        transactionalHistoryPage.selectDateRange();
        transactionalHistoryPage.checkIfTransferNotExists();        
    });

})
