/**
 * Created by Administrator on 2015/4/25.
 */

var addLacator = function (protractor) {
    protractor.By.addLocator('buttonTextSimple', function (buttonText, opt_parentElement, opt_rootSelector) {
        var using = opt_parentElement || document,
            buttons = using.querySelectorAll('button');
        return Array.prototype.filter.call(buttons, function (button) {
            return button.textContent === buttonText;
        });
    });

};
module.exports = addLacator;
