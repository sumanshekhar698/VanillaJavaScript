//TODO: falsy values -> they are treated as false

// undefined
// null
// 0
// ''
// NaN

var user = "2";

if (2 == user) {
  // lossely check
  console.log("Condition is true because of coercion");
}

if (2 === user) {
  //strict check
  console.log("Condition is true ");
}

var test = "2" + 2;
console.log(test + " " + typeof test);
