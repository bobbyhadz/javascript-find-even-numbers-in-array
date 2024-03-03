// EXAMPLE 1 - Find the Even or Odd Numbers in an Array in JavaScript

// ✅ Find the EVEN numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even); // 👉️ [2, 4, 6, 8]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Find even numbers with reusable function

// function findEvenNumbers(array) {
//   return array.filter(number => {
//     return number % 2 === 0;
//   });
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = findEvenNumbers(arr);
// console.log(even); // 👉️ [ 2, 4, 6, 8 ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Find odd numbers with reusable function

// function findOddNumbers(array) {
//   return array.filter(number => {
//     return number % 2 !== 0;
//   });
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 👇️ [ 1, 3, 5, 7, 9 ]
// console.log(findOddNumbers(arr));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Find the Even or Odd Numbers in an Array using Array.forEach()

// // ✅ Find the EVEN numbers in an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = [];

// arr.forEach(number => {
//   if (number % 2 === 0) {
//     even.push(number);
//   }
// });

// console.log(even); // 👉️ [2, 4, 6, 8]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Finding the Odd numbers in an array with forEach()

// // ✅ Find the ODD numbers in an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odds = [];

// arr.forEach(number => {
//   if (number % 2 !== 0) {
//     odds.push(number);
//   }
// });

// console.log(odds); // 👉️ [1, 3, 5, 7, 9]

// ------------------------------------------------------------------

// // EXAMPLE 6 - Find the Even or Odd Numbers in an Array using `for...of` loop

// // ✅ Find the EVEN numbers in an array

// const even = [];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of arr) {
//   if (number % 2 === 0) {
//     even.push(number);
//   }
// }

// // 👇️ [ 2, 4, 6, 8 ]
// console.log(even);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Finding the Odd numbers with `for...of`

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const oddNumbers = [];

// for (const number of arr) {
//   if (number % 2 !== 0) {
//     oddNumbers.push(number);
//   }
// }

// // 👇️ [ 1, 3, 5, 7, 9 ]
// console.log(oddNumbers);

// ------------------------------------------------------------------

// // EXAMPLE 8 - Find the even or odd numbers in an Array using a `for` loop

// // ✅ find the EVEN numbers in an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = [];
// console.log(even); // 👉️ [ 2, 4, 6, 8 ]

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 === 0) {
//     even.push(arr[index]);
//   }
// }

// // 👇️ [ 2, 4, 6, 8 ]
// console.log(even);

// ------------------------------------------------------------------

// // EXAMPLE 9 - Finding the odd numbers with a for loop

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odd = [];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 !== 0) {
//     odd.push(arr[index]);
//   }
// }

// // 👇️ [ 1, 3, 5, 7, 9 ]
// console.log(odd);
