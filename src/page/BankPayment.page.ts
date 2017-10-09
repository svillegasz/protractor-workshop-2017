import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class BankPaymentPage {
  private until = ExpectedConditions;

  private get confirmButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(this.until.presenceOf(this.confirmButton), 3000);
    await this.confirmButton.click();
  }
}
