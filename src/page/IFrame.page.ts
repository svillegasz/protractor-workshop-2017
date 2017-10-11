import { $, ElementFinder, promise, browser } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return $('#IF1');
  }

  public async setIFrame1Height(height: number): Promise<void> {
    await this.iFrame1.getAttribute('id').then(id =>
      browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`));
  }

  public getIFrame1Height(): promise.Promise<number> {
    return this.iFrame1.getCssValue('height').then(height =>
      Number(height.replace(/[^0-9.]/g, '')));
  }
}
