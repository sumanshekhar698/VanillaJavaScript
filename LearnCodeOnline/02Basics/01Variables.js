// FORM INPUT
var fullName = "Suman Shekhar"; // we can use camelCase or snake_case for the variable name
// also vaiable name cannot start with a digit and cannot be a reserved word
var email = "sumu@gmail.com";
var isloogedInFromGoogle = false;
var courseCount = 0;
var password = "XXXXX";
var confirmpassword = "XXXXX";
var paymentMode;
console.log(paymentMode); // undefined
paymentMode = "Bitcoin";
paymentSuccess = true;
console.log("Your payment mode was done: " + paymentMode);
console.log("and your payment status is ", paymentSuccess);

// FORM processing
courseCount = 1;
const uid = "12615006057"; //const cannot be modified late, ther are final
// uid = "12615006058"  // not allowed -> Type Error [Assignment to constant variable]
// var subscription = prompt('Subscribe to our newsletter ?'); // for this input you have to attact it to webpage

console.log(
  `
Name: ${fullName}
Unique ID generated: ${uid}
Courses Bought: ${courseCount}
`
); // best way to log to console -> Interpolation
