/**
 * Created by Administrator on 2015/4/24.
 */

describe('protractor homepage', function () {
    it('Todo demo test case', function () {
        browser.get('http://localhost:8080');

        // by id
        element(by.id('todoDescription')).sendKeys(' Jackey test');

        //by ng-model
        //element(by.model('userName')).sendKeys(' Sparrow model test');

        //by name
        //element(by.name('xx'))

        //by xpath
        // element(by.xpath)

        //by binding
        // Find the element with binding matching 'yourName' - this will
        // find the <h1>{{yourName}}!</h1> element.
        //var yourName = element(by.id('todoDescription'));
        //expect(yourName.getText()).toEqual('protractor');

        //element(by.buttonTextSimple('Go!')).click();
        //element(by.test('#userName')).sendKeys('test');
        browser.sleep(5000);
        //element
        //var WEB_ELEMENT_FUNCTIONS = [
        //    'click', 'sendKeys', 'getTagName', 'getCssValue', 'getAttribute', 'getText',
        //    'getSize', 'getLocation', 'isEnabled', 'isSelected', 'submit', 'clear',
        //    'isDisplayed', 'getOuterHtml', 'getInnerHtml', 'getId', 'getRawId'];

    });
});