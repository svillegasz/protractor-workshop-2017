import { IFramePage } from '../src/page'

describe('Given the iFrame Page', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeEach(async () => {
    await iFramePage.get();
  });

  describe('When I change the iFrame1 height', () => {
    const newHeight = '500px';

    beforeEach(async () => {
      await iFramePage.setIFrame1Height(newHeight);
    });

    it('Then it should have the new height', () => {
      expect(iFramePage.getIFrame1Height()).toBe(newHeight);
    });
  });
});