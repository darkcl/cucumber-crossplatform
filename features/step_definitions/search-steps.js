'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

var PageHelper = require("../../pageobjects/helper.js");

defineSupportCode(function({Given, When, Then}) {
  var page;

  Given('I am on {stringInDoubleQuotes}', function (pageName) {
    // Write code here that turns the phrase above into concrete actions
    var pageHelper = new PageHelper(pageName, this.driver, this.platform);
    page = pageHelper.page();
    return page.open();
  });

  When('I search for {stringInDoubleQuotes}', function (searchQuery) {
    return page.search(searchQuery);
  });

  Then('I should see some results', function (next) {
    next();
  });

});
