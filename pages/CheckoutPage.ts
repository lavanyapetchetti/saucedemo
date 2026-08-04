import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class CheckoutPage extends BasePage {


    firstName:Locator;
    lastName:Locator;
    postalCode:Locator;

    continueButton:Locator;
    finishButton:Locator;


    constructor(page:any){

        super(page);


        this.firstName =
            page.locator(
            '[data-test="firstName"]'
            );


        this.lastName =
            page.locator(
            '[data-test="lastName"]'
            );


        this.postalCode =
            page.locator(
            '[data-test="postalCode"]'
            );


        this.continueButton =
            page.locator(
            '[data-test="continue"]'
            );


        this.finishButton =
            page.locator(
            '[data-test="finish"]'
            );

    }



    async enterCustomerDetails(
        first:string,
        last:string,
        zip:string
    ){

        await this.firstName.fill(first);

        await this.lastName.fill(last);

        await this.postalCode.fill(zip);

    }



    async continue(){

        await this.continueButton.click();

    }



    async completeOrder(){

        await this.finishButton.click();

    }


}