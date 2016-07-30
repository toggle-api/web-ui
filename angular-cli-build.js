// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var compileLess = require('broccoli-less-single');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-dropdown/*.+(js|js.map)',
      'toggle-api/**/*.+(ts|js|js.map)'
    ]
  });

  var styles = compileLess(['styles'], 'main.less', 'styles.css', {paths: ['.', '']});

  return mergeTrees([app, styles]);
};
