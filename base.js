var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var properties = require('./properties');

class BasePage {

    constructor() {
        global.driver = driver;
    }

    navigateToTestRoom() {
        driver.get(properties.URL);
    }

    tearDown() {
        driver.quit();
    }
}
module.exports = BasePage;