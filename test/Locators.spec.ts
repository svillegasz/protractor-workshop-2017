import { browser } from 'protractor';
import { createHash } from 'crypto';

import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service/Download.service';

describe('Given the tools QA page', () => {
  const downloadService: DownloadService = new DownloadService();
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

  describe('When I download the test file', () => {
    beforeEach(async () => {
      formData['downloadFile'] = true;
      await personalInformationPage.fillForm(formData);
    });

    it('Then it should download the test file correctly', () => {
      const hash = createHash('sha256');
      const expectedHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
      const fileName = personalInformationPage.fileName;
      const downloadedFile = downloadService.readFileFromTemp(fileName);
      expect(hash.update(downloadedFile).digest('hex')).toBe(expectedHash);
    });
  });
});
