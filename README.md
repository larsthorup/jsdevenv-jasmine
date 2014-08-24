jsdevenv-jasmine
================

[![Build Status](https://travis-ci.org/larsthorup/jsdevenv-jasmine.png)](https://travis-ci.org/larsthorup/jsdevenv-jasmine)
[![Coverage Status](https://coveralls.io/repos/larsthorup/jsdevenv-jasmine/badge.png?branch=master)](https://coveralls.io/r/larsthorup/jsdevenv-jasmine?branch=master)
[![devDependency Status](https://david-dm.org/larsthorup/jsdevenv-jasmine/dev-status.png)](https://david-dm.org/larsthorup/jsdevenv-jasmine#info=devDependencies)

A sample build environment for JavaScript projects using Jasmine for testing

Prerequisites:

* install node.js

then

    npm install
    npm install -g grunt-cli


From the browser
----------------

run all tests

    file://(path-to)/src/test/index.html

run app

    file://(path-to)/src/index.html


From the command line
---------------------

continuously lint and test on every save

    grunt watch

perform static analysis

    grunt lint

run all tests (results in output\testresults)

    grunt test

produce test coverage statistics in html format (in output\coverage\index.html)

    grunt coverage:html

produce test coverage statistics in cobertura format (in output\coverage\cobertura)

    grunt coverage:cobertura
