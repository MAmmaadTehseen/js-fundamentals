'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },
// };

// restaurant.orderDelivery({
//   time: `22.23`,
//   address: `sds`,
// });
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);
// //mutating a variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 24 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open, close },
// } = hours;

// console.log(open, close);

// const resturantCopy = { ...restaurant, as: `ali` };
// console.log(resturantCopy);
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(1, 2, 3, 4, 5, 6, 7);
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //defualt values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//coding challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// console.log(game.players);
// const [players1, players2] = [...game.players];
// console.log(players1);

// const [gk, ...fieldPlayers] = [...players1];

// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [game.players];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// for (const item of players1) {
//   console.log(item);
// }
// const orderSet = new Set([`pasta`, `pizza`, `pizza`]);
// console.log(orderSet);
// console.log(new Set(`jonas`));
// console.log(orderSet.has(`pizza`));
// orderSet.add(`garlic bread`);
// orderSet.delete(`pizzaa`);
// console.log(orderSet);
// for (const order of orderSet) console.log(order);

//example of removing duplicate data in array

// const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

// const rest = new Map();

// rest.set(`name`, `pind daba`);
// console.log(rest);
// rest.set(1, `karachi , pak`);
// rest.set(2, `lahore,pak`);
// rest
//   .set(`categories`, [`italian`, `chionese`])
//   .set(`open`, 11)
//   .set(true, 'we are open')
//   .set(`close`, 23);

// console.log(rest.get(1));
// console.log(rest.has(`categories`));
// console.log(rest);

// const question = new Map([
//   [`question`, `what is the best programming lanuage in  the world`],
//   [1, `C`],
//   [2, `java`],
//   [3, `javascript`],
//   [`correct`, 3],
//   [true, `correct😃`],
//   [false, `try again`],
// ]);
// console.log(question);

// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(question.get(answer === 3));

// const arr = [...question];
// console.log(arr);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//coding challenge 2
// let i = 0;

// for (const name of [...game.scored]) {
//   i++;
//   console.log(`goal ${i}:${name}`);
// }

// console.log(game.odds);
// // for (const x of game.odds)

// //coding challenge#3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   [true, `first half`],
//   [false, `second half`],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// let sum = 0;
// for (const min of gameEvents.keys()) {
//   sum += min;
// }
// console.log(
//   `"An event happened, on average, every (${Math.floor(sum / 90)}) minutes`
// );

// for (const [key, value] of gameEvents) {
//   console.log(`[${gameEvents.get(key < 45)}] ${key}:'${value}'`);
// }
const airline = `Pakistan International Airline`;
const plane = `A320`;

console.log(plane[0]);

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
};
checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(airline.padEnd(100, `*`));
const maskCreditCard = function (number) {
  const str = String(number);
  console.log(str.slice(-4).padStart(str.length, `*`));
};
maskCreditCard(1214535266);
maskCreditCard(`222222222222222212145352662342424`);

//coding challenge#4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const camel of rows) {
    camel.replace(camel.indexOf(`_` + 1), `h`);
    console.log(camel);
  }
});
