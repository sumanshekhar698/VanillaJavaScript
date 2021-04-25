// SCENARIO 1
// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase process

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if (isLoggedIn) {
//   console.log("Logged IN Success");
//   if (isEmailVerified) {
//     console.log("Email is verified");
//     if (cardInfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
  // in a better way
  console.log("Allow user to make a purchase");
} else {
  console.log("You are NOT allowed to do that");
}

// SCENARIO 2
// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}
