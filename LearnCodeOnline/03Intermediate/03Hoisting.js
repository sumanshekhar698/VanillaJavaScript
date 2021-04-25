tipper("80");

function tipper(a) {
  //Rule 1: function declaration are scanned and made available
  var bill = parseInt(a);
  console.log(bill + 5);
}

// bigTipper("200");
// Rule 2: Variable are scanned and made undefined

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");

console.log(name); // undefined -> Rule 2: Variable are scanned and made undefined
var name = "hitesh";
console.log(name); // "hitesh"

function sayName() {
  var name = "MR. H";
  console.log(name);// MR H ->local scope gets priority
}

sayName();
var name = "suman";// Duplicate declaration are fine but should be avoided
console.log(name);
/*A kind of memory stack */
// Execution Context
// Execution Context
// Execution Context
// GlobalContext
