var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;

driver.get('http://www.thetestroom.com/webapp');
driver.findElement(By.css('#footer_term')).click();

driver.getAllWindowHandles().then(function getWindowHandles(AllHandles) {

    var parent = driver.getWindowHandle();
    var child = driver.getWindowHandle(-1);

    driver.getTitle().then(function (text) {
        console.log('Parent Window is: ' + text);
    });

    driver.switchTo().window(AllHandles[AllHandles.length - 1]);
    driver.findElement(By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Child Window is: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Round two Parent Window is: ' + text);
    });

    driver.switchTo().window(child);
    driver.getTitle().then(function (text) {
        console.log('Round two Child Window is: ' + text);
    });

    

});
