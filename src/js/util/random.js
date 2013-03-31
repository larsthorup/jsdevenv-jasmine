/*global Math*/
(function (Math) {
    'use strict';

    Math.randomBelow = function (n) {
        if (n < 1) {
            throw 'invalid argument: ' + n;
        }
        return Math.floor(Math.random() * n);
    };
})(Math);