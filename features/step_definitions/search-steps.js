'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {

  Given('I am on {page}', function (page) {
    // Write code here that turns the phrase above into concrete actions

    this.page = new page(this.driver, this.platform);
    
    return this.page.open();
  });

  When('I search for {string}', function (searchQuery) {
    return this.page.search(searchQuery);
  });

  Then('I should see some results', function (next) {
    next();
  });

});
