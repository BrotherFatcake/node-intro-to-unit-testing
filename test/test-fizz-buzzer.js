// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

    describe('fizzBuzzer', function()   {
        //positive tests
        it('if # is div by 3 report \'fizz\', by 5 report \'buzz\', by 15 report \'fizz-buzz\'', function() {
            const positiveTest = [
                {num: 3, out: 'fizz'},
                {num: 5, out: 'buzz'},
                {num: 15, out: 'fizz-buzz'}
            ];

            positiveTest.forEach(function(input)    {
                const fbOut = fizzBuzzer(input.num);
                expect(fbOut).to.be.equal(input.out)
            })
        });

        //negative num tests
        it('if # cannot div by 3, 5, or 15 return #', function() {
            const negativeNumTest = [
                {num: 1, out: 1},
                {num: 67, out: 67}
            ];

            negativeNumTest.forEach(function(input)    {
                const fbOut = fizzBuzzer(input.num);
                expect(fbOut).to.be.equal(input.out);
            })
        });

        //negative non-num tests
        it('if # is not a # return Error', function() {
            const negativeNotNumTest = [
                {num: 'x'},
                {num: 'this test'},
                {num: true}
            ];

            negativeNotNumTest.forEach(function(input)    {
                expect(function()    {
                    fizzBuzzer(input.num);
                }).to.throw(Error);
            })
        });
        
    })
    
