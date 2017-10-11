import { $, $$, ElementFinder, ElementArrayFinder, promise, browser, by } from 'protractor';

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

  private get sex(): ElementArrayFinder {
    return $$('input[name="sex"]');
  }

  private get yearsOfExperience(): ElementArrayFinder {
    return $$('input[name="exp"]');
  }

  private get professions(): ElementArrayFinder {
    return $$('input[name="profession"]');
  }

  private get profilePicture(): ElementFinder {
    return $('#photo');
  }

  private get automationTools(): ElementArrayFinder {
    return $$('input[name="tool"]');
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
    return this.sex
      .filter(sex => sex.getAttribute('value').then(value => value === sexName))
      .first()
      .click();
  }

  private selectExperience(years: number): promise.Promise<void> {
    return this.yearsOfExperience
      .filter(experience => experience.getAttribute('value').then(value => value === String(years)))
      .first()
      .click();
  }

  private selectProfessions(professions: String[]): promise.Promise<void> {
    return this.professions
      .filter(profession => profession.getAttribute('value')
        .then(value => professions.some(profession => profession === value)))
      .each(profession => profession.click());
  }

  private selectTools(tools: String[]): promise.Promise<void> {
    return this.automationTools
      .filter(tool => tool.getAttribute('value')
        .then(value => tools.some(tool => tool === value)))
      .each(tool => tool.click());
  }

  private selectContinent(continent: string): promise.Promise<void> {
    return this.continent.element(by.cssContainingText('option', continent)).click();
  }

  private selectCommands(commands: String[]): promise.Promise<void> {
    return this.continent.$$(`option`)
      .filter(command => command.getText()
        .then(text => commands.some(command => command === text)))
      .each(command => command.click());
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
