var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../hello-world.js');

describe('check valid functionality of hello word', function () {

  it('convert to uppercase', function () {
    expect(functionToUse('hello world')).to.eqls('HELLO WORLD');
  });

  it('Check when input is empty, should return empty string', function () {
    expect(functionToUse('')).to.eqls("");
  });
});

describe('check invalid input of the functionality', function () {

  it('when input is not a string, should return not a valid string to convert to uppercase', function () {
    expect(functionToUse([1, 2, 3])).to.eqls('not a valid string to convert to uppercase');
  });

  it('Check when no arguments are passed, should return empty string', function () {
    expect(functionToUse()).to.eqls('not a valid string to convert to uppercase');
  });

  it('when input is not a string, should return not a valid string to convert to uppercase', function () {
    expect(functionToUse(1)).to.eqls('not a valid string to convert to uppercase');
  });
});