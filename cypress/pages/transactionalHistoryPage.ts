class TransactionalHistoryPage {
    
    selectorsList() {
        return {
            mineTransactionsOption: '[data-test="nav-personal-tab"]', 
            transactionsList: '[data-test="transaction-list"]', 
            createTransactionButton: '[data-test="transaction-list-empty-create-transaction-button"]',
            filterDateRangeButton: '[data-test="transaction-list-filter-date-range-button"]' 
        }
    }

    accessMyTransactionsPage() {
        cy.get(this.selectorsList().mineTransactionsOption).click();
    }

    checkIfTransferExists() {
        cy.get(this.selectorsList().transactionsList);
    }

    checkIfTransferNotExists() {
        cy.get(this.selectorsList().createTransactionButton);
        // cy.window().then((win) => {
        //     win.addEventListener('transactionsLoaded', () => {
        //       cy.get(this.selectorsList().noTransactionMessage).should('be.visible').contains('No Transactions'); // nao deveria funcionar
        //     });
        //   });          
    }

    // checkIfTransferFail() {
    //     cy.get(this.selectorsList().messageTransferDoneWithSuccess)
    //     .should('be.visible')
    //     .should('not.contain', 'Paid');
    // }
}

export default TransactionalHistoryPage
