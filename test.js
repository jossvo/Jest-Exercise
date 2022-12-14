const { fromEuroToDollar } = require('./app.js')
const { fromDollarToYen } = require('./app.js')
const { fromYanToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 106.583 yen", function(){
    // this is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(106.583); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One yen should be 0.006 pounds", function(){
    // this is the comparison for the unit test
     expect(fromYanToPound(1)).toBe(0.006); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})