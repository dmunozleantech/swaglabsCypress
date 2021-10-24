export class HomePage {
    
    lblHeader() {
        return cy.get('[class="header_secondary_container"]');
    }

    listSorted() {
        return cy.get('[data-test="product_sort_container"]')
    }

    lblItemPrice() {
        return cy.get('[class="inventory_item_price"]')
    }

    btnAddCart() {
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    }

    btnCart() {
        return cy.get('[class="shopping_cart_link"]')
    }

    btnMenu() {
        return cy.get('button[id="react-burger-menu-btn"]')
    }

    btnLogOut() {
        return cy.contains('Logout');
    }
    
    
}
export const homePage = new HomePage()




