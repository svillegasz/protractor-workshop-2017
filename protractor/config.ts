import { browser, Config } from 'protractor';
import { reporter } from './helper/reporter';

export let config: Config = {
    framework: 'jasmine',
    specs: ['../test/**/*.spec.js'],
    noGlobals: true,
    getPageTimeout: 30000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(0);
        browser.ignoreSynchronization = true;
        reporter();
    },
    SELENIUM_PROMISE_MANAGER: false,
};
