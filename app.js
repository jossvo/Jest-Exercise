// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

const roundThreeDigits=(result)=>Math.round(result * 1000) / 1000

const fromDollarToYen = (dollar)=> roundThreeDigits(dollar/1.2*127.9);
const fromEuroToDollar = (euro)=> roundThreeDigits(euro*1.2);
const fromYanToPound = (yen)=> roundThreeDigits(yen/127.9*0.8);
console.log(fromDollarToYen(1))
console.log(fromYanToPound(1))
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound};