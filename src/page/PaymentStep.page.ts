import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankPaymentButton(): ElementFinder {
    return $('p.payment_module > a.bankwire');
  }

  public payByBank(): promise.Promise<void> {
    return this.bankPaymentButton.click();
  }
}
