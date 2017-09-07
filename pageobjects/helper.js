"use strict";

var GooglePage = require("./google-page.js");
var YahooPage = require("./yahoo-page.js");
var DuckDuckGoPage = require("./duckduckgo-page.js");

module.exports = function(pageName, driver, platform){
    this.pageName = pageName;
    this.driver = driver;
    this.platform = platform;

    this.page = function() {
        var dict = {
            "Google" : new GooglePage(this.driver, this.platform),
            "Yahoo" : new YahooPage(this.driver, this.platform),
            "DuckDuckGo" : new DuckDuckGoPage(this.driver, this.platform)
        };

        return dict[this.pageName];
    }; 
};