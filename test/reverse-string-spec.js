const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const assert = require("assert");
const {reverseString} = require('../problems/reverse-string.js')

describe('reverseString', () => {
    context('with a valid string input', () => {
        it('should return the string reversed', () => {
            const input = 'fun'
            let result = reverseString(input)
            let output = 'nuf'
            expect(result).to.eql(output)
        })
    })
    context('when the argument is not a string', () => {
        it('should return an error', () => {
            const input = 17
            // let result = reverseString(input)
            // don't need output for thrown errors
            expect(() => reverseString(input)).to.throw(Error)
        })
    })
})