let js = 'amazing';
console.log(40 + 8 + 23 - 10);
let firstName = 'jonas';
console.log(firstName)
PI = 'ammad';
// easy
console.log(typeof (PI))

const age = 39;
console.log(age * 2, age ** 2);
// age**2 means age ka square
// concatinating strings
console.log(js + ' ' + PI);
// coding challenge 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.88;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

//other data
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);


//templete literal
const myName = `i am ${PI}`;

console.log(myName);


//coding challenge 2
if (markHeigherBMI) {
    console.log(`mark's BMI(${markBMI}) is higher than john's(${johnBMI})`);
} else {
    console.log(` john's(${johnBMI})is higher than mark's BMI(${markBMI})`);
}
//type conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18)

// const favorite = Number(prompt(`what's your favorite number`));
// if (favorite === 23) {
//     console.log(`cool`);
// }


//coding challenge 3

let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage) {
    console.log(`dolphins win`);
}
else if (dolphinsAverage < koalasAverage) {
    console.log(`koalas win`);
}
else {
    console.log(`draw`);
}
dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 123) / 3;
//bonus 1
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`dolphins win`);
}
else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`koalas win`);
}
else {
    console.log(`draw`);
}
//bonus 2
dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 106) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`dolphins win`);
}
else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`koalas win`);
}
else if (dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`draw`);
}
else {
    console.log(`no team wins`)
}
//coding challenge 4
const bill = 430;
let tip
bill >= 50 && bill <= 300 ? tip = bill * 15 / 100 : tip = bill * 20 / 100;
console.log(`the bill was ${bill},the tip was ${tip},and the total value is${bill + tip}`)