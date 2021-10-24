@Regresion
Feature: Form Swaglab
  As a user
  I need to verify the correct working of Swaglab
  To check the availability of the site

  Acceptance criteria
  * Validate the user navigates to the products page when logged in.
  * Validate error message is displayed.
  * Validate the user navigates to the login page.
  * Validate the products have been sorted by price correctly.
  * Validate all the items that have been added to the shopping cart.
  * Validate the correct product was added to the cart.
  * Validate the user navigates to the order confirmation page.



  @SucessfulCase
Scenario: Verify the successful purchase of an item with the standard user
  Given I login into the app with username "standard_user" and password "secret_sauce"
  When  Validate the user navigates to the login page
  And I get click on sorted by "Price (low to high)"
  Then Validate the products have been sorted by price correctly 
  | firstProduct | secondProduct | lastProduct |
  | $7.99       | $9.99         |   $49.99    |
  And I select an item from the site and make the buy
    | txtFirstName | txtLastName | txtPostalCode |
    | Steven         | Arbelaez  | 054040       |
  And Verify the message "THANK YOU FOR YOUR ORDER" after complete the order
  And  I Make logout
  Then Verify I go back to loginPage 


  @WrongLogin
Scenario: Verify the successful purchase of the lowest and the highest priced items
  Given I login into the app with username "standard_user" and password "secret_sauce12"
  Then error message  "Epic sadface: Username and password do not match any user in this service"



  