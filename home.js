var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;
class HomePage extends BasePage {

    clickOnAdoptionLink() {
        //using chaining of CSS elements
        driver.findElement(By.css('[name=nav_adopt]#adoption_link')).click();
        //return a page by the use of return and using global keyword in the BasePage
        return require('./adoption');
    }

}
module.exports = new HomePage();