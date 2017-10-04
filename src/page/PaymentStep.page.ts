import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
 private get bankPaymentButton(): ElementFinder {
   return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }

 public payByBank(): promise.Promise<void> {
   return this.bankPaymentButton.click();
 }
}
