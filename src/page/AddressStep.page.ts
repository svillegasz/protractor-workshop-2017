import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class AddressStepPage {
 private until = ExpectedConditions;

 private get proceedButton(): ElementFinder {
   return $('#center_column > form > p > button > span');
 }

 public async proceedToCheckout(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.proceedButton), 3000);
   return this.proceedButton.click();
 }
}
