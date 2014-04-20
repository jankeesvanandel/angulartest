/*
 *Copyright 2014 Jan-Kees van Andel
 *
 *Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 *You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing, software
 *distributed under the License is distributed on an "AS IS" BASIS,
 *WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *See the License for the specific language governing permissions and
 *limitations under the License.
 */

'use strict';

var basePath = '../../'

// list of files / patterns to load in the browser
var files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  { pattern: 'bower_components/**/*.js', included: false },
  { pattern: 'client/*/*', included: false },
  'client/main-test.js'
]

// list of files to exclude
var exclude = []

// test results reporter to use
// possible values: dots || progress
var reporter = 'progress'

// web server port
var port = 8080

// cli runner port
var runnerPort = 9100

// enable / disable colors in the output (reporters and logs)
var colors = true

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
var logLevel = LOG_INFO

// enable / disable watching file and executing tests whenever any file changes
var autoWatch = false

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
var browsers = ['PhantomJS']

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
var singleRun = false

var reporters = ['dots']
