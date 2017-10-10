import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get proceedButton(): ElementFinder {
    return $('a.standard-checkout');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedButton.click();
  }
}
