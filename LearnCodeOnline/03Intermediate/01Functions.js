// SCENARIO 1
function sayHello(name) {
  console.log(`Hello there, ${name}. How are you?`);
}

function ciao() {
  console.log("Bella Ciao");
}

function namstey() {
  return "Hello in India";
}

sayHello("hitesh");
sayHello("Sammy");
ciao(); //function call
ciao; //referencing the function
var greetings = namstey();

console.log(greetings);
console.log(namstey()); //same as above but using inline approach

/*
SCENARIO 2
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  //a function can also be variable in JS
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} is sub-admin with access to create and delete courses`;
      break;
    case "testprep":
      return `${name} is a test prep with access to create and delete tests`;
      break;
    case "user":
      return `${name} is a user to consume content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole("hitesh", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole);
