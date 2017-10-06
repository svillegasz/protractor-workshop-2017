import { browser, Config } from 'protractor';
import { reporter } from './helper/reporter';

export let config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  noGlobals: true,    
  getPageTimeout: 1000,
  onPrepare () {
    browser.ignoreSynchronization = true;
    reporter();
  },
  SELENIUM_PROMISE_MANAGER: false,
};
