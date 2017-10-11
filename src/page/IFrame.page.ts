import { $, ElementFinder, promise, browser } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return $('#IF1');
  }

  private get iFrame2(): ElementFinder {
    return $('#IF2');
  }

  public get(): promise.Promise<void> {
    return browser.get('http://toolsqa.com/iframe-practice-page/');
  }

  public setIFrame1Height(height: string): promise.Promise<void> {
    return this.iFrame1.getAttribute('id').then(id =>
      browser.executeScript(`document.getElementById("${id}").style.height = "${height}";`));
  }

  public getIFrame1Height(): promise.Promise<string> {
    return this.iFrame1.getCssValue('height');
  }
}
