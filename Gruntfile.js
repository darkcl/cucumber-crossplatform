'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      chrome: {
        PLATFORM: 'CHROME'
      },
      
      firefox: {
        PLATFORM: 'FIREFOX'
      },

      android: {
        PLATFORM: 'ANDROID'
      },
      
      ios: {
        PLATFORM: 'IOS'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: "global",
        esversion: 6
      }
    },

    cucumberjs: {
      chrome: {
        options: {
          format: 'html',
          output: './public/chrome/report.html',
          theme: 'bootstrap',
          debug: true
        },
        features : []
      },

      firefox: {
        options: {
          format: 'html',
          output: './public/firefox/report.html',
          theme: 'bootstrap',
          debug: true
        },
        features : []
      },

      android: {
        options: {
          format: 'html',
          output: './public/android/report.html',
          theme: 'bootstrap',
          debug: true
        },
        features : []
      },

      ios: {
        options: {
          format: 'html',
          output: './public/ios/report.html',
          theme: 'bootstrap',
          debug: true
        },
        features : []
      }
      
    },

    exec: {
      run_cucumber_tests: {
        command: path.join('node_modules', 'cucumber',  'bin', 'cucumber.js')
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-cucumberjs');

  grunt.registerTask('default', ['jshint', 'exec']);
  grunt.registerTask('chrome', ['env:chrome', 'jshint', 'cucumberjs:chrome']);
  grunt.registerTask('firefox', ['env:firefox', 'jshint', 'cucumberjs:firefox']);
  grunt.registerTask('android', ['env:android', 'jshint', 'cucumberjs:android']);
  grunt.registerTask('ios', ['env:ios', 'jshint', 'cucumberjs:ios']);
  grunt.registerTask('all', ['chrome', 'firefox', 'android', 'ios']);
};
