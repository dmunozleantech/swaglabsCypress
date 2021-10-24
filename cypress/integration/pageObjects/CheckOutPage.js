export class CheckOutPage {
    
    txtFirstName() {
        return cy.get('[data-test="firstName"]');
    }

    txtLastName() {
        return cy.get('[data-test="lastName"]');
    }

    txtPostalCode() {
        return cy.get('[data-test="postalCode"]');
    }

    btnContinue() {
        return cy.get('[data-test="continue"]');
    }

    btnFinish(){
        return cy.get('[data-test="finish"]')
    }

    lblMessage() {
       return cy.get('.complete-header');
    }

    


   
}
export const checkOutPage = new CheckOutPage()






