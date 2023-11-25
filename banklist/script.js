const account1 = {
  owner: 'Ammaad Tehseen',
  movements: [200, 450, 400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Sabir khan',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Naimat Ullah',
  movements: [200, 200, 340, -300, 400000, -20, 50, 400, -460],
  interestRate: 0,
  pin: 1122,
};

const account4 = {
  owner: 'M Moaz',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement, index, array) {
//   console.log(`movement${index}you deposited${movement}`);
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}:${value}`);
// });
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(movementsUsd);
const deposit = movements.filter(mov => mov > 0);
console.log(movements, deposit);
const withdraws = movements.filter(mov => mov < 0);
console.log(movements, withdraws);
//pipeline
const totalDepositInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositInUsd);
const checkDogs = function (karr, jarr) {
  const jarrCorrect = [...jarr];
  jarrCorrect.splice(0, 1);
  jarrCorrect.splice(-2);
  let remaingDogs = [...jarrCorrect, ...karr];
  remaingDogs.forEach((element, index) =>
    console.log(
      `dog ${index} is ${
        element > 3 ? `adult` : `puppy`
      }, and is ${element} years old`
    )
  );
};
let arrk = [4, 1, 15, 8, 3];
let arrj = [3, 5, 2, 12, 7];
// checkDogs(arrj, arrk);
// const calcAverageHumanAge = function (arr) {
//   let humanAge = 0;
//   var i = 0;
//   for (let element of arr) {
//     if (element > 2) {
//       humanAge += 16 + element * 4;
//       i++;
//     }
//   }
//   return humanAge / i;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

//coding challenge#3
const calcAverageHumanAge = arr => {
  let len = arr.filter(element => element > 2).map(element => element);
  // leen = len.lenght;
  let newarr = arr
    .filter(element => element > 2)
    .reduce((acc, element) => acc + 16 + element * 4, 0);
  // console.log(len.le);
  return newarr / len.length;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
//coding challenge# 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

for (let dog of dogs) {
  dog.recommendedFoodPortion = dog.weight ** 0.75 * 28;
  if (
    dog.curFood > dog.recommendedFoodPortion * 0.9 &&
    dog.curFood < dog.recommendedFoodPortion * 1.1
  )
    dog.status = `okay`;

  if (dog.curFood == dog.recommendedFoodPortion) dog.status = `exectaly`;
  if (dog.curFood > dog.recommendedFoodPortion) dog.status = `toomuch`;
  if (dog.curFood < dog.recommendedFoodPortion) dog.status = `toolow`;
}
console.log(dogs);
const sarahDog = dogs.find(dog => dog.owners.includes(`Sarah`));
console.log(sarahDog);
const toomuch = dogs
  .filter(dog => dog.status == `toomuch`)
  .map(dog => dog.owners)
  .flat();
console.log(toomuch);

const toolow = dogs
  .filter(dog => dog.status == `toolow`)
  .map(dog => dog.owners)
  .flat();
console.log(toolow);
console.log(`${toomuch.join(` and `)}'s dog eat too much`);

console.log(`${toolow.join(` and `)}'s dog eat too low`);
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);
console.log(dogsSorted);
//not completed
