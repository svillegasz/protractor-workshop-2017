import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ShippingStepPage {
  private until = ExpectedConditions;

  private get proceedButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  private get cgv(): ElementFinder {
    return $('#cgv');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.cgv.click();
    await browser.wait(this.until.presenceOf(this.proceedButton), 3000);
    await this.proceedButton.click();
  }
}
