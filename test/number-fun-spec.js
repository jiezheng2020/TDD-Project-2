const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const assert = require("assert");
const {reverseString} = require('../problems/reverse-string.js');
const { isContext } = require("vm");
const { interface } = require("chai-spies");
const { returnsThree, reciprocal } = require("../problems/number-fun")
describe('returnsThree', () => {
    it('should return 3', () => {
        let output = 3
        let result = returnsThree();

        assert.strictEqual(output, result);
    })
})

describe('reciprocal(num)', () => {
    context('if argument is number', () => {
        it('should return the reciprocal of the number', () => {
            let input = 2;
            let output = 1/2;
            let res = reciprocal(input);

            assert.strictEqual(output, res);

            let input2 = 3;
            let output2 = 1/3;
            let res2 = reciprocal(input2);

            assert.strictEqual(output2, res2);

        })
    })
    context('if the input argument is not a number', () => {
        it('should throw a TypeError', () => {
            let input = '3';
            // let output = 1/3;
            // let res = reciprocal(input);

            assert.throws(() => reciprocal(input), TypeError);
        })
    })

})
