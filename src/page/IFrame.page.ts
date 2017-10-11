import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
  private get mainTitle(): ElementFinder {
    return $('#content h1');
  }

  private get formFrame(): ElementFinder {
    return $('#IF1');
  }

  private get formFrameTitle(): ElementFinder {
    return this.formFrame.$('#content > h1');
  }

  public getTitle(): promise.Promise<string> {
    return this.mainTitle.getText();
  }

  public getFormFrameTitle(): promise.Promise<string> {
    return this.formFrameTitle.getText();
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    const id = await this.formFrame.getAttribute('id');
    await browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`);
  }

  public async getFormFrameHeight(): Promise<number> {
    const height = await this.formFrame.getCssValue('height');
    return await Number(height.replace(/[^0-9.]/g, ''));
  }

  public switchToFormFrame(): promise.Promise<void> {
    return browser.switchTo().frame(this.formFrame.getWebElement());
  }

  public switchToMainPage(): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}
