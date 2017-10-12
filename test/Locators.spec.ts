import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given the tools QA page', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
  const formData = {
    firstName: 'Alejandro',
    lastName: 'Perdomo',
    sex: 'Male',
    experience: 7,
    profession: ['Automation Tester'],
    tools: ['Selenium Webdriver'],
    continent: 'South America',
    file: '../../../resources/protractor.png',
    commands: [
      'Browser Commands',
      'Navigation Commands',
      'Switch Commands',
      'Wait Commands',
      'WebElement Commands']
  };

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When I submit the form', () => {
    beforeEach(async () => {
      await personalInformationPage.submitForm(formData);
    });

    it('Then it should display the correct title', async () => {
      expect(await personalInformationPage.getTitle())
        .toMatch('Automation Practice Form');
    });
  });

  describe('When I fill the form', () => {
    beforeEach(async () => {
      await personalInformationPage.fillForm(formData);
    });

    it('Then it should display the uploaded photo name', async () => {
      const fileName = formData.file.substr(formData.file.lastIndexOf('/') + 1);
      expect(await personalInformationPage.getPhotoName())
        .toMatch(fileName);
    });
  });
});
