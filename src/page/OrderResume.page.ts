import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class OrderResumePage {
 private until = ExpectedConditions;
 
 public get completeMessage(): ElementFinder {
   return $('#center_column > div > p > strong');
 }

 public async getCompleteMessage(): Promise<String> {
   await browser.wait(this.until.presenceOf(this.completeMessage), 3000);
   return this.completeMessage.getText();
 }
}
