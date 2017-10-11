import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
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
  }
}
