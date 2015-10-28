/**
 * Created by Administrator on 2015/4/24.
 */

describe('protractor homepage', function () {

    it('open the browser', function () {
        browser.get('http://localhost:8080');
    });

    it('Todo demo add todo', function () {

        element.all(by.getTodoListCount()).count().then(function (oldCount) {
            element(by.id('todoDescription')).sendKeys(' Jackey test');
            element(by.id('todoDate')).sendKeys(new Date());
            element(by.id('submitTodo')).click();
            element.all(by.getTodoListCount()).count().then(function (newCount) {
                expect(newCount).toEqual(oldCount + 1);
            });
        });
        browser.sleep(2000);
    });

    it('Todo Test delete function', function () {

        element.all(by.getTodoListCount()).count().then(function (oldCount) {
            element(by.id('delete1')).click();
            element.all(by.getTodoListCount()).count().then(function (newCount) {
                expect(newCount).toEqual(oldCount - 1);
            });
        });

        browser.sleep(2000);
    });


});