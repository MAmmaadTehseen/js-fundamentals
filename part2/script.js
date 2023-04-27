/*'use strict';


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive`);

function logger() {
    console.log(`my name is jonas`)
}


  logger();

function fruitProcessor(apple, oranges) {
    ret
}

//arrow function

const age = birthYear => 2023 - birthYear;

console.log(age(2002))

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}


console.log(yearsUntillRetirement(2002, `ammad`))


//coding challenge 1

const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(koalasAverage)
const checkWinner = function (averageD, averageK) {
    if (averageD > 2 * averageK) {
        return `dolphins wins`;
    }
    if (averageK > 2 * averageD) {
        return `koalas win`;
    }
}


console.log(checkWinner(dolphinsAverage, koalasAverage));




const friends = [`ammad`, `akhtar`, `ali`, `mohsin`];
console.log(friends[0]);

const years = new Array(1991, 2002, 2005, 2008);
console.log(years)

console.log(friends.length)
friends[0] = `ali`;
console.log(friends);

//methods

friends.push(`faizan`);

friends.unshift(`shifter`);
console.log(friends);

console.log(friends.indexOf(`shifter`));


//coding challenge 2


const clacTip = function (bill) {
    return
}

//objects
const jonas = {
    firstName: `ammad`,
    lastName: `tehseen`,
    age: 2023 - 2002,
    job: `teacher`,
    friends: [`faizan`, `ali`, `mohsin`]

};
console.log(jonas);
console.log(jonas.job)
console.log(jonas[`lastName`])


const interestedIn = prompt(`what do you know about jonas`);
console.log(jonas[interestedIn])*/

const jonas = {
  firstName: `ammad`,
  lastName: `tehseen`,
  birthYear: 2002,
  job: `student`,
  friends: [`ali`, `faizan`, `mohsin`],
  hasDriversLicese: true,

  calAge: function () {
    return 2023 - this.birthYear;
  },

  summary: function () {
    return `Hi i am ${this.firstName} ${
      this.lastName
    } ${this.calAge()} years old. My friends are ${this.friends}.`;
  },
};
console.log(jonas.calAge());

console.log(jonas.summary());

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

//coding challenge #4
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
