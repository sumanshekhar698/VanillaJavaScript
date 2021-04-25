//      *        -       /      ^       %
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
var num1 = 69;
var num2 = 8;
var answer = num1 > num2;
console.log(`Sum: ${num1 + num2}`);
console.log(`Product: ${num1 * num2}`);

var sellipgPrice = 199;
var listingPrice = 799;
var discountPercent = ((listingPrice - sellipgPrice) / listingPrice) * 100;
var displayDiscountPercent = Math.round(discountPercent);

console.log(`discountPercent: ${displayDiscountPercent} % OFF`);
console.log(typeof displayDiscountPercent); //number
