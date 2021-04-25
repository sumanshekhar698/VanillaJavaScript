var name = "Hitesh";
console.log("Line number 3", name);

function sayName() {
  var name = "Mr. H";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    // var name = "Mr. HC";
    console.log("Line number 12", name); //mr H -> It will ask to just above scope if unavailable
    //If that was not available they would have skked from Global Context
  }
} //nesting function in fine in Java

sayName();
