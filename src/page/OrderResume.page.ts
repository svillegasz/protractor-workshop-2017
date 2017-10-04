import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 public get completeMessage(): ElementFinder {
   return $('#center_column > div > p > strong');
 }

 public getCompleteMessage(): promise.Promise<String> {
   return this.completeMessage.getText();
 }
}
