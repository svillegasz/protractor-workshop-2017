import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get confirmButton(): ElementFinder {
    return $('#cart_navigation > button[type="submit"]');
  }

  public confirmOrder(): promise.Promise<void> {
    return this.confirmButton.click();
  }
}
