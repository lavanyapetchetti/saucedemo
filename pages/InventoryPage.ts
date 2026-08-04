import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  backpack: Locator;
  bikeLight: Locator;

  constructor(page: any) {
    super(page);

    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async addBackpack() {
    await this.click(this.backpack);
  }

  async addBikeLight() {
    await this.click(this.bikeLight);
  }
}
