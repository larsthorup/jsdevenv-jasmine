/*global window, describe, it, expect */
describe('util.passwordEvaluator', function () {
    'use strict';

    var pw = window.passwordEvaluator;

    it('should return 0 when password is really bad', function () {
        expect(pw.strength('abc')).toBe(0);
    });
    it('should return 1 when length is larger than 4', function () {
        expect(pw.strength('china')).toBe(1);
    });
    it('should return 2 when length is larger than 8', function () {
        expect(pw.strength('evaluator')).toBe(2);
    });
    it('should return 1 when two character categories are used', function () {
        expect(pw.strength('a1')).toBe(1);
    });
    it('should return 2 when three character categories are used', function () {
        expect(pw.strength('a1.')).toBe(2);
    });
    it('should return 1 when both character casing is used', function () {
        expect(pw.strength('aA')).toBe(1);
    });
    it('should return 5 when length is larger than 8, three character categories and both chararacter casings are used', function () {
        expect(pw.strength('aAbBcCdD123!#')).toBe(5);
    });
});
