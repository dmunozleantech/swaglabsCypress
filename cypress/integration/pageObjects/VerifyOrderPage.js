export class VerifyOrderPage {
    
    btnCheckOut() {
        return cy.get('[data-test="checkout"]');
    }
   
}
export const verifyOrderPage = new VerifyOrderPage()




