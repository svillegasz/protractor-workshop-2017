import { browser, Config } from 'protractor';
import { reporter } from './helper/reporter';

export let config: Config = {
    framework: 'jasmine',
    specs: ['../test/**/*.spec.js'],
    noGlobals: true,
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        reporter();
    },
    SELENIUM_PROMISE_MANAGER: false,
};
