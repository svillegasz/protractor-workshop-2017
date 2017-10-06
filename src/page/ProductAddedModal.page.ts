import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get proceedButton(): ElementFinder {
    return $('.button-container > a');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedButton.click();
  }
}
