import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Name of the group', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeEach(async () => {
    browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('Name of the group', () => {
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
    it('should behave...', () => {

    });
  });
});