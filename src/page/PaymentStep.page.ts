import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class PaymentStepPage {
 private until = ExpectedConditions;
 
 private get bankPaymentButton(): ElementFinder {
   return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }

 public async payByBank(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.bankPaymentButton), 3000);
   return this.bankPaymentButton.click();
 }
}
