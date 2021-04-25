var neighbouringCountries = ["Srilanka", "Pakistan", "Bhutan", "Maldives"];
var religions = new Array("Jharkhand", "Assam", "Karnataka", "Kerala");

console.log(neighbouringCountries[0]);
neighbouringCountries[0] = "China";
console.log(neighbouringCountries[0]);

console.log(neighbouringCountries.length);
var user = ["Suman Shekhar", 25, "Male", "17/11/97"];
console.log(user);

poppedElement = user.pop(); //pops last element  -> 17/11/97
console.log(poppedElement); // 17/11/97
console.log(user); //[ 'Suman Shekhar', 25, 'Male' ]
var length1 = user.push("Dhanbad"); // returns length -> 4

console.log(length1); //4
console.log(user); // [ 'Suman Shekhar', 25, 'Male', 'Dhanbad' ]

//remove element from the begining
var length2 = user.unshift("Programmer"); // returns length 5
console.log(length2); //5
console.log(user); //[ 'Programmer', 'Suman Shekhar', 25, 'Male', 'Dhanbad' ]
user.shift();
//if array is empty , it returns *undefined*
console.log(user); // [ 'Suman Shekhar', 25, 'Male', 'Dhanbad' ]

console.log(user.indexOf(25)); //1
console.log(user.indexOf(35)); //-1

console.log(Array.from("Sumania"));
