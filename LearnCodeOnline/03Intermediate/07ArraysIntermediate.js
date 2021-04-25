function isEven1(element) {
  if (element % 2 === 0) {
    return true;
  }
  return false;
}

function isEven2(element) {
  return element % 2 === 0;
}

var isEven3 = function (element) {
  return element % 2 === 0;
};

var isEven4 = (element) => {
  // element % 2 === 0;// returns -> undefined
  return element % 2 === 0;
};

console.log(isEven4(2)); //true
var result = [2, 3, 6, 8].every(isEven4); // we are passing a refernce not calling it -> isEven
// every is a callback fn and returns a boolean if tests are passing for all the element
console.log(result); //false

var result = [2, 3, 6, 8].every((e) => {
  return e % 2 === 0;
}); // arrow function callback
// when using curly braces, you have to return something (() => { return })

result = [2, 4, 6, 8].every((e) => e % 2 === 0); // arrow function callback
result = [2, 4, 6, 8].every((e) => e % 2 === 0); // arrow function callback
console.log(result); // true
// when using small braces, no need to return (() => ( ))
