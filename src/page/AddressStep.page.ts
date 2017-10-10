import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get proceedButton(): ElementFinder {
    return $('button[name="processAddress"]');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedButton.click();
  }
}
