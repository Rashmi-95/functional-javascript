var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../hello-world.js');

describe('check string functionality', function () {
    it('convert to uppercase', function () {
        expect(functionToUse('hello world')).to.eqls('HELLO WORLD');
    });
    it('Check when input is empty', function () {
        expect(functionToUse('')).to.eqls("");
    });
});

describe('check if not the type of string', function () {
    it('when input is not a string', function () {
        expect(functionToUse([1, 2, 3])).to.eqls('not a valid string to convert to uppercase');
    });
});