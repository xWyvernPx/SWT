const log = console.log.bind(console);

//    ==  -  Loose equality operator

// const expected = 3;
// const actual = "3";

// console.log(
//   `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
//     expected == actual
//   }`
// );

/* const expected = true;
const actual = "1";

log(
  `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
    expected == actual
  }`
); */

// === - Strict equality operator
/* 
const studentA = {
  name: "A",
  age: 20,
};
const studentA2 = {
  name: "A",
  age: 20,
};

log(
  "Expected value: ",
  studentA,
  "\nActual value: ",
  studentA2,
  `\nCompare value: ${studentA === studentA2}`
); */

const expected = [1, 2, 3];
const actual = [1, 2, 3];

log(
  `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
    expected === actual
  }`
);
