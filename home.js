var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver;
class HomePage {

    constructor() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    }

    navigateToTestRoom() {
        driver.get('http://www.thetestroom.com/webapp');
    }

    clickOnAdoptionLink() {
        //using chaining of CSS elements below
        driver.findElement(By.css('[name=nav_adopt]#adoption_link')).click();
    }

}
module.exports = new HomePage();