var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../higher-order-functions.js');

var operation1 = function () {
    console.log('hi');
}

describe('To check functionality of higher order function', function () {
    
    it('When given opertation and number is valid, shoud work as expected', function () {
        expect(functionToUse(operation1, 3)).to.eqls(console.log('hi'),console.log('hi'),console.log('hi'));
    });
    
    it('Check when input number is 0, should return null string', function () {
        expect(functionToUse(operation1, 0)).to.eqls('');
    });

});

describe('To check functionality when given input is not valid', function () {
    
    var operation2 = {
        message: 'hi'
    }

    it('When no arguments are passed, should throw error : not a valid operation', function () {
        expect(functionToUse()).to.eqls('Given operation is not valid function');
    });

    it('When operation is not a function, should throw error : not a valid operation', function () {
        expect(functionToUse(operation2, 6)).to.eqls('Given operation is not valid function');
    });

    it('When num is not a number, should return error : not a valid number', function () {
        expect(functionToUse(operation1, 'hi')).to.eqls('Given number is not valid number');
    });
    
    it('When number is not a valid count, should return error : not a valid count', function () {
        expect(functionToUse(operation1, -2)).to.eqls('Given number is not valid count');
    });

});