export class LoginPage {
    
    txtUsername() {
        return cy.get('#user-name');
    }
    txtPassword() {
        return cy.get('#password');
    }
    btnLogin() {
        return cy.get('#login-button');
    }

    lblErrorMessage(){
        return cy.get('[data-test="error"]')
    }


}
export const loginPage = new LoginPage()

