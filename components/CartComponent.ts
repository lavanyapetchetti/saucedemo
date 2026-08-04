import { Locator, Page } from '@playwright/test';


export class CartComponent {


    private cartBadge: Locator;


    constructor(private page:Page){


        this.cartBadge =
            page.locator(
                '.shopping_cart_badge'
            );

    }



    async getCartCount(){


        return await this.cartBadge.textContent();


    }


    async verifyItemAdded(){


        await this.cartBadge
        .waitFor({
            state:'visible'
        });


    }


}