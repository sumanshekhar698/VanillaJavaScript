// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") break;
  console.log(myStates[i]);
}

console.log(
  "******************************************************************************"
);
console.log(myStates[10]); // returns "undefined" while accessing -> index out of bounds indexes

let i = 0;

const a = 100;
// const a = 100;// cannot declare  constant two times
console.log(a);

var b = 90;
var b = 200;
console.log(b);

//WHILE
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}
console.log(i);
// let i = 20;// cannot declare twice using let
i = 20; // cannot declare twice using let

//DO-WHILE
do {
  console.log(i);
  i++;
} while (i < 10);

// TRICKY QUESTION
// var i = 0;// error because i is already declared using let
i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
