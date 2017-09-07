"use strict";

var {By, until, Key} = require('selenium-webdriver');

module.exports = function(driver, platform){
    
    this.driver = driver;
    this.platform = platform;

    this.open = function() {
        return driver.get('http://www.google.co.uk/webhp?complete=0');
    };
    
    this.search = function (query) {
        driver.findElement(By.name('q')).sendKeys(query);
        return driver.findElement(By.name('q')).sendKeys(Key.ENTER);
    };
    
};
