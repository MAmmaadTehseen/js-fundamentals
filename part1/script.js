let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "jonas";
console.log(firstName);
PI = "ammad";
// easy
console.log(typeof PI);

const age = 39;
console.log(age * 2, age ** 2);
// age**2 means age ka square
// concatinating strings
console.log(js + " " + PI);
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
console.log(Number(inputYear) + 18);

// const favorite = Number(prompt(`what's your favorite number`));
// if (favorite === 23) {
//     console.log(`cool`);
// }

//coding challenge 3

let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage) {
  console.log(`dolphins win`);
} else if (dolphinsAverage < koalasAverage) {
  console.log(`koalas win`);
} else {
  console.log(`draw`);
}
dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 123) / 3;
//bonus 1
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`dolphins win`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`koalas win`);
} else {
  console.log(`draw`);
}
//bonus 2
dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 106) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`dolphins win`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`koalas win`);
} else if (dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log(`draw`);
} else {
  console.log(`no team wins`);
}
//coding challenge 4
const bill = 430;
let tip;
bill >= 50 && bill <= 300
  ? (tip = (bill * 15) / 100)
  : (tip = (bill * 20) / 100);
console.log(
  `the bill was ${bill},the tip was ${tip},and the total value is${bill + tip}`
);

// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �
//coding challenge 5

const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(koalasAverage);
const checkWinner = function (averageD, averageK) {
  if (averageD > 2 * averageK) {
    return `dolphins wins`;
  }
  if (averageK > 2 * averageD) {
    return `koalas win`;
  }
};

console.log(checkWinner(dolphinsAverage, koalasAverage));
// Coding Challenge #6
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

const clacTip = function (bill) {
  return;
};

//objects
const jonas = {
  firstName: `ammad`,
  lastName: `tehseen`,
  age: 2023 - 2002,
  job: `teacher`,
  friends: [`faizan`, `ali`, `mohsin`],
};
console.log(jonas);
console.log(jonas.job);
console.log(jonas[`lastName`]);

const interestedIn = prompt(`what do you know about jonas`);
console.log(jonas[interestedIn]);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �
//coding challenge#3
const mark = {
  fullName: `marks miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const john = {
  fullName: `john smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  john.calcBMI() > mark.calcBMI()
    ? `John's BMI(${john.calcBMI()}) is higher than Mark's BMI(${mark.calcBMI()})!`
    : `John's BMI(${john.calcBMI()}) is lower than Mark's BMI(${mark.calcBMI()})!`
);
// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �
const bills = [22, 295, 17, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [],
  totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(tips, totals);