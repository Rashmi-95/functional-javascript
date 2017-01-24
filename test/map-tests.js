var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../map.js');

describe('A script to return double of number Array', function () {
    
    it('when it is number Array', function () {
        expect(functionToUse([1,2,3,4])).to.eqls([2,4,6,8]);
    });
});

describe('check if input is not an array', function () {
    
    it('when input is not an array of numbers', function () {
        expect(functionToUse(['dfg', 12, 'ijk'])).to.eqls('Not a valid number array');
    });
    
    it('when input is not an array of numbers', function () {
        expect(functionToUse(123)).to.eqls('Not a valid Array');
    });
});