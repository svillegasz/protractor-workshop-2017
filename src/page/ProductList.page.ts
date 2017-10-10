import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get productItem(): ElementFinder {
    return $('a.product_img_link > img');
  }

  public goToProductItemDetails(): promise.Promise<void> {
    return this.productItem.click();
  }
}
