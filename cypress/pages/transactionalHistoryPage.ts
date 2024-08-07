class TransactionalHistoryPage {
    
    selectorsList() {
        return {
            mineTransactionsOption: '[data-test="nav-personal-tab"]', 
            noTransactionMessage: '[data-test="empty-list-header"]'
        }
    }

    accessMyTransactionsPage() {
        cy.get(this.selectorsList().mineTransactionsOption).click();
    }

    checkIfTransferNotExists() {
        cy.window().then((win) => {
            win.addEventListener('transactionsLoaded', () => {
              cy.get(this.selectorsList().noTransactionMessage).should('be.visible');
            });
          });
          
    }

    // checkIfTransferFail() {
    //     cy.get(this.selectorsList().messageTransferDoneWithSuccess)
    //     .should('be.visible')
    //     .should('not.contain', 'Paid');
    // }
}

export default TransactionalHistoryPage
