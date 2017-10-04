import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
 private until = ExpectedConditions;

 private get proceedButton(): ElementFinder {
   return $('.button-container > a');
 }

 public async proceedToCheckout(): Promise<void> {
   await browser.wait(this.until.visibilityOf(this.proceedButton));
   return this.proceedButton.click();
 }
}
