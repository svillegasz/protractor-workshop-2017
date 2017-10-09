import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductDetailPage {
  private until = ExpectedConditions;

  private get addButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public async addToCart(): Promise<void> {
    browser.wait(this.until.presenceOf(this.addButton), 3000);
    return this.addButton.click();
  }
}
