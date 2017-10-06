import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class ShippingStepPage {
 private until = ExpectedConditions;
 
 private get proceedButton(): ElementFinder {
   return $('#form > p > button > span');
 }

 private get cgv(): ElementFinder {
   return $('#cgv');
 }

 public async agreedTerms(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.cgv), 3000);
   return this.cgv.click();
 }

 public async proceedToCheckout(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.proceedButton), 3000);
   return this.proceedButton.click();
 }
}
