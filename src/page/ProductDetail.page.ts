import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
 private get addButton(): ElementFinder {
   return $('#add_to_cart > button > span');
 }

 public addToCart(): promise.Promise<void> {
   return this.addButton.click();
 }
}
  