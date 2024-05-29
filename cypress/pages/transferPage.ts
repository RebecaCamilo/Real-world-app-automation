class TransferPage {
    
    selectorsList() {
        return {
            newTransaction: '[data-test="nav-top-new-transaction"]',
            userList: '[data-test="user-list-item-GjWovtg2hr"]',
            userBalance: '[data-test="sidenav-user-balance"]',
            amountField: '#amount',
            transactionDescriptionField: '#transaction-create-description-input',
            submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
            messageTransferDoneWithSuccess: '.MuiGrid-spacing-xs-3'
        }
    }

    accessTransactionPage() {
        cy.get(this.selectorsList().newTransaction).click();

    }
    
    clickFirstUser() {
        cy.get(this.selectorsList().userList).click();
    }

    sendMoneyWithSufficientBalance() {
        cy.get(this.selectorsList().userBalance)
            .should('be.visible')
            .invoke('text')
            .then((balanceValue) => {
                cy.get(this.selectorsList().amountField).type(balanceValue)
            });
        cy.get(this.selectorsList().transactionDescriptionField).type("note")
        cy.get(this.selectorsList().submitPaymentButton).click()
    }

    sendMoneyWithNotSufficientBalance() {
        cy.get(this.selectorsList().userBalance)
            .should('be.visible')
            .invoke('text')
            .then((balanceValue) => {
                cy.log('O valor do balance é: ' + balanceValue)
                cy.get(this.selectorsList().amountField).type("10000")
            });
        cy.get(this.selectorsList().transactionDescriptionField).type("note")
        cy.get(this.selectorsList().submitPaymentButton).click()
    }

    checkIfTransferSuccess() {
        cy.get(this.selectorsList().messageTransferDoneWithSuccess).should('be.visible').contains('Paid');
    }

    checkIfTransferFail() {
        cy.get(this.selectorsList().messageTransferDoneWithSuccess)
        .should('be.visible')
        .should('not.contain', 'Paid');
    }
}

export default TransferPage
