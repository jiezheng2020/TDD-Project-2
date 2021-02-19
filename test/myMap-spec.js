const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const assert = require("assert");
const {myMap} = require("../problems/myMap.js")

describe('myMap(arr, cb)', () => {
    context('When given an array and a valid callback', () => {
        it('should return an array where every element has been passed through the callback' , () => {
            let arr = [1,2,3]
            let cb = num => num*2;
            let output = [2,4,6]
            let res = myMap(arr,cb)

            assert.deepStrictEqual(res,output)

        })

        it('should not use array#map', ()=> {
            let arr = [1,2,3]
            let cb = num => num*2
            let output = [2,4,6]
            let spyCnt = chai.spy.on(arr,'map')
            myMap(arr,cb)
            console.log(spyCnt)
            expect(spyCnt).to.have.been.called.exactly(0)
        })

        it('should not mutate the array', () => {
            let arr = [1,2,3]
            let cb = num => num*2
            let output = [2,4,6]
        })
    })
})