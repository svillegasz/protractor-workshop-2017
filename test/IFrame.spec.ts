import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given the iFrame Page', () => {
  const iFramePage: IFramePage = new IFramePage();
  const mainTitle = 'Sample Iframe page';

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Then it should display the correct title', () => {
    expect(iFramePage.getTitle()).toMatch(mainTitle);
  });

  describe('When I change the form frame height', () => {
    const newHeight = 500;

    beforeEach(async () => {
      await iFramePage.setFormFrameHeight(newHeight);
    });

    it('Then it should have the new height', () => {
      expect(iFramePage.getFormFrameHeight()).toBe(newHeight);
    });
  });

  describe('When I switch to the form frame height', () => {
    const frameTitle = 'Practice Automation Form';

    beforeEach(async () => {
      await iFramePage.switchToFormFrame();
    });

    it('Then it should display the correct title', () => {
      expect(iFramePage.getFormFrameTitle()).toMatch(frameTitle);
    });

    describe('And I switch back to the main page', () => {
      beforeEach(async () => {
        await iFramePage.switchToMainPage();
      });

      it('Then it should display the correct title', () => {
        expect(iFramePage.getTitle()).toMatch(mainTitle);
      });
    });
  });
});
