var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../higher-order-functions.js');
var operation1 = function () {
    console.log('hi');
}
describe('check higher order function functionality', function () {
    it('when given opertation and number is valid', function () {
        expect(functionToUse(operation1, 3)).to.eqls(console.log('hi'),console.log('hi'),console.log('hi'));
    });
    it('Check when input number is 0', function () {
        expect(functionToUse(operation1, 0)).to.eqls('');
    });
});
describe('when given input is not valid', function () {
    var operation2 = {
        message: 'hi'
    }
    it('when operation is not a function', function () {
        expect(functionToUse(operation2, 6)).to.eqls('given operation is not valid');
    });
    it('when num is not a number', function () {
        expect(functionToUse(operation1, 'hi')).to.eqls('the given num is not valid number');
    });
    it('when number is not a valid count', function () {
        expect(functionToUse(operation1, -2)).to.eqls('the given number is not valid count');
    });
});