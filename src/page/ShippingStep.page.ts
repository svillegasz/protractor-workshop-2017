import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get proceedButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  private get cgv(): ElementFinder {
    return $('#cgv');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.cgv.click();
    await this.proceedButton.click();
  }
}
