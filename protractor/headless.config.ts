import { browser, Config } from 'protractor';
import { reporter } from './helper/reporter';

export let config: Config = {
  framework: 'jasmine',
  specs: [
    '../test/Google.spec.js'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  noGlobals: true,
  onPrepare() {
    browser.ignoreSynchronization = true;
    reporter();
  },
  SELENIUM_PROMISE_MANAGER: false,
};
