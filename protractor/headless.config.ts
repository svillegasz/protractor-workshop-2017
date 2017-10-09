import { browser, Config } from 'protractor';
import { reporter } from './helper/reporter';

export let config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  noGlobals: true,
  onPrepare () {
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
    reporter();
  },
  SELENIUM_PROMISE_MANAGER: false,
};
