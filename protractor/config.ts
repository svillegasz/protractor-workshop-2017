import { browser, Config } from 'protractor';
import { reporter }   from './helper/reporter';

export let config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '../test/Google.spec.js'
    ],
    noGlobals: true,
    onPrepare: function () {        
        browser.ignoreSynchronization = true;
        reporter();
    }
};
