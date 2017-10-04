import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
 private get confirmButton(): ElementFinder {
   return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }

 public confirmOrder(): promise.Promise<void> {
   return this.confirmButton.click();
 }
}
