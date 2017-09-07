"use strict";

var {By, until, Key} = require('selenium-webdriver');

module.exports = function(driver, platform){
    
    this.driver = driver;
    this.platform = platform;

    this.open = function() {
        return driver.get('https://duckduckgo.com/');
    };
    
    this.search = function (query) {

        if (this.platform !== "CHROME") {
            
            driver.findElement(By.className('js-search-input')).sendKeys(query);
            return driver.findElement(By.className('js-search-input')).sendKeys(Key.ENTER);
        }else{
            driver.findElement(By.id('search_form_input_homepage')).sendKeys(query);
            return driver.findElement(By.id('search_form_input_homepage')).sendKeys(Key.ENTER);
        }

        
    };
    
};