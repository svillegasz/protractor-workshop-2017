import { $, ElementFinder, promise, browser } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return $('#IF1');
  }

  public async setIFrame1Height(height: number): Promise<void> {
    const id = this.iFrame1.getAttribute('id');
    await browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`);
  }

  public async getIFrame1Height(): Promise<number> {
    const height = await this.iFrame1.getCssValue('height');
    return await Number(height.replace(/[^0-9.]/g, ''));
  }
}
