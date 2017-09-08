'use strict';

var { defineSupportCode, ParameterType } = require('cucumber');

var GooglePage = require("../../pageobjects/google-page.js");
var YahooPage = require("../../pageobjects/yahoo-page.js");
var DuckDuckGoPage = require("../../pageobjects/duckduckgo-page.js");

defineSupportCode(function ({ BeforeAll, defineParameterType }) {

  defineParameterType({
    regexp: /"(.*)" Page/,
    transformer: s => {
      var pageRouting = {
        'Google': GooglePage,
        'Yahoo': YahooPage,
        'DuckDuckGo': DuckDuckGoPage
      };
      
      return pageRouting[s];
    },
    typeName: 'page'
  });

});