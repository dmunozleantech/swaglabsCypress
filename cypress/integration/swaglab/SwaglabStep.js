
import { LoginPage, loginPage } from '../pageObjects/LoginPage';
import { homePage } from '../pageObjects/HomePage';
import { verifyOrderPage } from '../pageObjects/VerifyOrderPage';
import { checkOutPage } from '../pageObjects/CheckOutPage';
import { Before, After, Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit('/')

})


Given('I login into the app with username {string} and password {string}', (user, password) => {
  loginPage.txtUsername().type(user, { delay: 100 })
  loginPage.txtPassword().type(password, { delay: 100 })
  loginPage.btnLogin().click({ force: true })
});

When('Validate the user navigates to the login page', () => {
  homePage.lblHeader().find('.title').should('contain', 'Products')

})

And('I get click on sorted by {string}', (sorted) => {
  homePage.listSorted().select(sorted)
})

Then('Validate the products have been sorted by price correctly', (datatable) => {

  datatable.hashes().forEach(element => {

    homePage.lblItemPrice().eq(0).invoke('text').then(text => {
      expect(text.trim()).to.equal(element.firstProduct)
    })

    homePage.lblItemPrice().eq(1).invoke('text').then(text => {
      expect(text.trim()).to.equal(element.secondProduct)
    })

    homePage.lblItemPrice().eq(5).invoke('text').then(text => {
      expect(text.trim()).to.equal(element.lastProduct)
    })

  })

})


When('I select an item from the site and make the buy', (datatable) => {
  homePage.btnAddCart().click();
  homePage.btnCart().click({ force: true });
  verifyOrderPage.btnCheckOut().click({ force: true });
  datatable.hashes().forEach(element => {
    checkOutPage.txtFirstName().type(element.txtFirstName)
    checkOutPage.txtLastName().type(element.txtLastName);
    checkOutPage.txtPostalCode().type(element.txtPostalCode)
  })

  checkOutPage.btnContinue().click({ force: true })

})

And('Verify the message {string} after complete the order', (message) => {
  checkOutPage.btnFinish().click({force: true});
  checkOutPage.lblMessage().invoke('text').then(text => {
    expect(text.trim()).to.equal(message);
  }) 

})

And ('I Make logout', () => {
    homePage.btnMenu().click({force:true});
    cy.wait(2000)
    homePage.btnLogOut().click({force:true});

}) 

Then('Verify I go back to loginPage', () => {
loginPage.btnLogin().should('exist');

}) 


Then('error message {string}', (message) => {
  loginPage.lblErrorMessage().invoke('text').then(text =>{
    expect(text.trim()).to.equal(message)
  })

})   


After(() => {

});


