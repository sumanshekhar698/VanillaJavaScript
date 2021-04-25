console.log(this); //global object/ window object [browsers]

var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this); //user object
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this); //Window object
    }
    sayHello(); //regular function call
  },
};

user.getCourseCount(); // not a regular fn call

function sayHello() {
  console.log("Hello from the other side");
  console.log("LINE 20", this); //Window object
}

sayHello(); //regular function call
