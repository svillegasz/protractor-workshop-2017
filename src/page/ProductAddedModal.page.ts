import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
 private get proceedButton(): ElementFinder {
   return $('#add_to_cart > button > span');
 }

 public proceedToCheckout(): promise.Promise<void> {
   return this.proceedButton.click();
 }
}
