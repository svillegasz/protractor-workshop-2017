import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class SummaryStepPage {
 private until = ExpectedConditions;
 
 private get proceedButton(): ElementFinder {
   return $('.cart_navigation span');
 }

 public async proceedToCheckout(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.proceedButton), 3000);
   return this.proceedButton.click();
 }
}
