var chai = require('chai');
var expect = chai.expect;
var getShortMessages = require('../arry-filter.js');
describe('Ex 4 : To check functionality of Array filter', function () {
    var messagesTest1 = [
        {
            message: 'Welcome Chai.js and Mocha.js'
        },
        {
            message: 'Hello, I am new to javascript and it is a great language. I am enjoying learning it.'
        }
    ];
    var messagesTest2 = [
        {
            message: 'Welcome Chai.js and Mocha.js. These are the testing frameworks'
        },
        {
            message: 'Hello, I am new to javascript and it is a great language. I am enjoying learning it.'
        }
    ];
    it('Check funcitonality of function, should return strings length < 50', function () {
        expect(getShortMessages(messagesTest1)).to.eqls(['Welcome Chai.js and Mocha.js']);
    });
    it('When no message is less than 50 characters, should return empty Array', function () {
        expect(getShortMessages(messagesTest2)).to.eqls([]);
    });
    it('Check when input is empty, should return empty Array', function () {
        expect(getShortMessages([])).to.eqls([]);
    });
});
describe('To check functionality for invalid input', function () {

    var error = 'Input is incorrect. It is supposed to be array of objects with message property';
    it('When input is not an array of objects, should return error message', function () {
        expect(getShortMessages('Hello Testing')).to.eqls(error);
    });
   /* it('when input is an arrray but not of objects', function () {
        expect(getShortMessages([1,2,3])).to.eqls(error);
    });*/
});