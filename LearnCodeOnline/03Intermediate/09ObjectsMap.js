var user = {
  // "firstName": "Hitesh",//sometime we can put keys in quotes as per scene
  firstName: "Hitesh", // If two key with same name, last value will be picked up
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseDetails: function () {
    return `${this.firstName} is enrolled in total ${this.courseList.length} courses`;
  },
};

console.log(user.firstName);
console.log(user["lastName"]); // Key should be in quotes while accesing via []

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user); // shows [key | value] pair in tabular form
console.log(user); // shows [key | value] pair in tabular form

user.buyCourse("django");
user.buyCourse("flutter");
user.buyCourse("quantum computing");
console.table(user); // shows [key | value] pair in tabular form

console.log(user.getCourseDetails);
