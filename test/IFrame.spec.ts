import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given the iFrame Page', () => {
  const iFramePage: IFramePage = new IFramePage();
  const mainTitle = 'Sample Iframe page';

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Then it should display the correct title', async () => {
    expect(await iFramePage.getTitle()).toMatch(mainTitle);
  });

  describe('When I change the form frame height', () => {
    const newHeight = 500;

    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(newHeight);
    });

    it('Then it should have the new height', async () => {
      expect(await iFramePage.getFormFrameHeight()).toBe(newHeight);
    });

    describe('And I switch to the form frame height', () => {
      const frameTitle = 'Practice Automation Form';

      beforeAll(async () => {
        await iFramePage.switchToFormFrame();
      });

      it('Then it should display the correct title', async () => {
        expect(await iFramePage.getTitle()).toBe(frameTitle);
      });

      describe('And I switch back to the main page', () => {
        beforeAll(async () => {
          await iFramePage.switchToMainPage();
        });

        it('Then it should display the correct title', async () => {
          expect(await iFramePage.getTitle()).toMatch(mainTitle);
        });
      });
    });
  });
});
