/**
 * Created by Jackey Li on 2015/10/27.
 */
exports.config = {
    directConnect: true,
    framework: "jasmine2",
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [
        'test.js'
    ],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        require('./locator/locatorExtend.js')(protractor);
        var jasmineReporters = require('jasmine-reporters');
        var reporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'output',
            savePath: 'E2E/e2eOutput'
        });
        jasmine.getEnv().addReporter(reporter);
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};