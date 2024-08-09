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
        cy.get(this.selectorsList().createTransactionButton).should('be.visible').should('contain', 'Create A Transaction');
    }

    selectDateRange() {
        const formattedTodayDate: string = this.getFormattedDateFromToday(0);
        const formattedTomorrowDate: string = this.getFormattedDateFromToday(1);
        cy.get(this.selectorsList().filterDateRangeButton).click({force: true});
        cy.get(`[data-date=${formattedTodayDate}]`).click({force: true});
        cy.get(`[data-date=${formattedTomorrowDate}]`).click({force: true});
    }

    getFormattedDateFromToday(daysFromToday: number): string {
        const today = new Date();
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + daysFromToday);
    
        const year = targetDate.getFullYear();
        const month = String(targetDate.getMonth() + 1).padStart(2, '0');
        const day = String(targetDate.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }

}

export default TransactionalHistoryPage
