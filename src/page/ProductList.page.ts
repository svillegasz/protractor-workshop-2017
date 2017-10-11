import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
<<<<<<< HEAD
  private get products(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(name: String): ElementFinder{
    return this.products
      .filter((product) => product.$('.product-name').getText()
        .then(text => text === name)).first();
  }

  private selectProduct(name: String): promise.Promise<void>{
    return this.findByProduct(name).click();
  }

  public goToProductItemDetails(name: String): promise.Promise<void> {
    return this.selectProduct(name);
=======
  private get productContainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(name: String): ElementFinder {
    return this.productContainerList
      .filter(product => product.$('.product-name').getText()
        .then(text => text === name)).first();
  }

  public selectProduct(name: String): promise.Promise<void> {
    return this.findByProduct(name).$('img').click();
>>>>>>> master
  }
}
