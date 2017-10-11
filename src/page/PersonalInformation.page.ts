import { $, ElementFinder, promise, browser, by } from 'protractor';

export class PersonalInformationPage {
  private get title(): ElementFinder {
    return $('.page-title h1');
  }

  private get firstName(): ElementFinder {
    return $('input[name="firstname"]');
  }

  private get lastName(): ElementFinder {
    return $('input[name="lastname"]');
  }

  private get continent(): ElementFinder {
    return $('#continents');
  }

  private get seleniumCommands(): ElementFinder {
    return $('#selenium_commands');
  }

  private get submit(): ElementFinder {
    return $('#submit');
  }

  private selectSex(sexName: String): promise.Promise<void> {
    return $(`input[name="sex"][value="${sexName}"]`).click();
  }

  private selectExperience(years: number): promise.Promise<void> {
    return $(`input[name="exp"][value="${years}"]`).click();
  }

  private async selectProfessions(professions: String[]): Promise<void> {
    for (const profession of professions) {
      await $(`input[name="profession"][value="${profession}"]`).click();
    }
  }

  private async selectTools(tools: String[]): Promise<void> {
    for (const tool of tools) {
      await $(`input[name="tool"][value="${tool}"]`).click();
    }
  }

  private selectContinent(continent: string): promise.Promise<void> {
    return this.continent.element(by.cssContainingText('option', continent)).click();
  }

  private async selectCommands(commands: string[]): Promise<void> {
    for (const command of commands) {
      await this.seleniumCommands.element(by.cssContainingText('option', command)).click();
    }
  }

  public get(): promise.Promise<void> {
    return browser.get('http://toolsqa.com/automation-practice-form/');
  }

  public async fillForm(formData: any): Promise<void> {
    await this.firstName.sendKeys(formData.firstName);
    await this.lastName.sendKeys(formData.lastName);
    await this.selectSex(formData.sex);
    await this.selectExperience(formData.experience);
    await this.selectProfessions(formData.profession);
    await this.selectTools(formData.tools);
    await this.selectContinent(formData.continent);
    await this.selectCommands(formData.commands);
    await this.submit.click();
  }

  public getTitle(): promise.Promise<String> {
    return this.title.getText();
  }
}
