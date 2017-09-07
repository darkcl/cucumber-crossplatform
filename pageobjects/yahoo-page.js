"use strict";

var {By, until, Key} = require('selenium-webdriver');

module.exports = function(driver, platform){
    
    this.driver = driver;
    this.platform = platform;

    this.open = function() {
        return driver.get('https://hk.yahoo.com/');
    };
    
    this.search = function (query) {
        if (this.platform !== "CHROME") {
            driver.findElement(By.className('search-input')).sendKeys(query);
            return driver.findElement(By.className('search-input')).sendKeys(Key.ENTER);
        }else{
            driver.findElement(By.id('UHSearchBox')).sendKeys(query);
            return driver.findElement(By.id('UHSearchBox')).sendKeys(Key.ENTER);
        }
        
    };
    
};