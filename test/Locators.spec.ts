import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given the tools QA page', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When I fill the form', () => {
    beforeEach(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('Then it should display the correct title', () => {
      expect(personalInformationPage.getTitle())
        .toMatch('Automation Practice Form');
    });
  });
});
