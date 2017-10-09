import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage {
  private until = ExpectedConditions;

  private get tShirtMenu(): ElementFinder {
    return $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(this.until.presenceOf(this.tShirtMenu), 3000);
    await this.tShirtMenu.click();
  }
}
