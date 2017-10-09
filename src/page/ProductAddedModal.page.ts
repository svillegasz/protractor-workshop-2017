import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private until = ExpectedConditions;

  private get proceedButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(this.until.presenceOf(this.proceedButton), 3000);
    await browser.wait(this.until.visibilityOf(this.proceedButton), 3000);
    return this.proceedButton.click();
  }
}
