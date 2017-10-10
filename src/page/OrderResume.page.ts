import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  public get completeMessage(): ElementFinder {
    return $('p.cheque-indent > strong');
  }

  public getCompleteMessage(): promise.Promise<String> {
    return this.completeMessage.getText();
  }
}
