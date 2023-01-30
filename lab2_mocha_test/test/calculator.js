const assert = require('chai').assert;
const addFunction = require('../app/calculator').add;
const mulFunction = require('../app/calculator').mul;
const divFunction = require('../app/calculator').div;
const subFunction = require('../app/calculator').sub;

describe('Calculator', function () {

    describe('Addition', function () {

        it('the expected result is 7 so  PASS', function () {
            let result = addFunction(5, 2);
            assert.equal(result, 7);
        });

        it('Expected result 8 FAIL', function () {
            let result = addFunction(5, 2);
            assert.equal(result, 8);
        });

    });

    describe('Subtraction', function () {

        it('Expected result 3 PASS', function () {
            let result = subFunction(5, 2);
            assert.equal(result, 3);
        });

        it('Expected result 5 FAIL', function () {
            let result = subFunction(5, 2);
            assert.equal(result, 5);
        });

    });

    describe('Multiplication', function () {

        it('Expected result 10 PASS', function () {
            let result = mulFunction(5, 2);
            assert.equal(result, 10);
        });

        it('Expected result 12 FAIL', function () {
            let result = mulFunction(5, 2);
            assert.equal(result, 12);
        });

    });

    describe('Division', function () {

        it('Expected result 5 PASS', function () {
            let result = divFunction(10, 2);
            assert.equal(result, 5);
        });

        it('Expected result 2 FAIL', function () {
            let result = divFunction(10, 2);
            assert.equal(result, 2);
        });

    });

});
