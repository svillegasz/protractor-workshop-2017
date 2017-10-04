import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
 private get productItem(): ElementFinder {
   return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
 }

 public goToProductItemDetails(): promise.Promise<void> {
   return this.productItem.click();
 }
}
