var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill("empty")); // fills existing element with the specified value "empty"

console.log(testArray.fill("X", 3));
// fills existing element with the specified value "empty" from the specified position -> 4th

testArray.fill(9);
console.log(testArray.fill("X", 3, 5));
// fills existing element with the specified value "empty" from the specified position -> 4th to end -1

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num >= 55);
// filter returns a new array according to filtration condition
console.log(result);

// Yes, Same exercise file
console.log(
  "*****************************************************************************"
);
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users);
console.log(users.slice(1, 4));
console.log(users.slice(1));
console.log(users);
console.log(
  "*****************************************************************************"
);

var returnedElements = users.splice(1, 9, "HI", "BYE"); //start , count, replacement strings
//if count > elements consider all
// mutates the same array
console.log(returnedElements);
console.log(users);
console.log(
  "*****************************************************************************"
);

users.splice(); // nothing happens heren, as no parameter was passed
console.log(users);
