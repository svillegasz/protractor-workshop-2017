import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get proceedButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  private get cgv(): ElementFinder {
    return $('#cgv');
  }

  public agreedTerms(): promise.Promise<void> {
    return this.cgv.click();
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedButton.click();
  }
}
