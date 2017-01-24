var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../map.js');

describe('Ex 3 : To check functionality for double of number Array', function () {
    
    it('when it is number Array, should return array of numbers doubled', function () {
        expect(functionToUse([1,2,3,4])).to.eqls([2,4,6,8]);
    });

    it('when it is number Array with negative value, should return array of numbers doubled', function () {
        expect(functionToUse([1,2,0,-3])).to.eqls([2,4,0,-6]);
    });
});

describe('To check functionality for invalid input', function () {

    it('when input is not an array of numbers, should return error message', function () {
        expect(functionToUse(['dfg', 12, 'ijk'])).to.eqls('Not a valid number array');
    });
    
    it('when input is not an instanceof array, should return not an Array', function () {
        expect(functionToUse(123)).to.eqls('Not an Array');
    });
});