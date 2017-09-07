'use strict';

var {defineSupportCode} = require('cucumber');
var {Builder, By, until} = require('selenium-webdriver');
var fs = require('fs');
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      deviceName: 'Android device',
      browserName: 'Chrome'
    }).
    build();
};

var buildIosDriver = function() {
  return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      browserName: 'safari',
      platformName: "iOS",
      platformVersion: "10.3",
      deviceName: "iPhone Simulator"
      // app: "/Users/darkcl/Documents/Workspace/Mastodon-iOS/Build/Products/Debug-iphonesimulator/Mastodon-iOS.app",
      // automationName: "XCUITest"
    }).
    build();
};

var buildChromeDriver = function() {
  return new Builder().forBrowser("chrome").build();
};

var buildFirefoxDriver = function() {
    return new Builder().forBrowser("firefox").build();
};

var buildDriver = function() {
  switch(platform) {
    case 'ANDROID':
      return buildAndroidDriver();
    case 'FIREFOX':
      return buildFirefoxDriver();
    case 'IOS':
      return buildIosDriver();
    default:
      return buildChromeDriver();
  }
};

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});

function CustomWorld({attach, parameter}) {

  var screenshotPath = "screenshots";

  this.attach = attach;

  this.parameter = parameter;

  this.driver = buildDriver();

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
});
