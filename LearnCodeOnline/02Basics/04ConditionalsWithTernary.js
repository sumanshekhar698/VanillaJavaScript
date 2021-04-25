// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN"); //Using ternary
