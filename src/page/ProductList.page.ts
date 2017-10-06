import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class ProductListPage {
 private until = ExpectedConditions;
 
 private get productItem(): ElementFinder {
   return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
 }

 public async goToProductItemDetails(): Promise<void> {
   await browser.wait(this.until.presenceOf(this.productItem), 3000);
   return this.productItem.click();
 }
}
