import { $, ElementFinder, browser } from 'protractor';

export class IFramePage {
  private get formFrame(): ElementFinder {
    return $('#IF1');
  }

  public async setIFrame1Height(height: number): Promise<void> {
    const id = this.formFrame.getAttribute('id');
    await browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`);
  }

  public async getFormFrameHeight(): Promise<number> {
    const height = await this.formFrame.getCssValue('height');
    return await Number(height.replace(/[^0-9.]/g, ''));
  }
}
