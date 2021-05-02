var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
let count = 1;
setInterval(() => {
  if (count <= 1000) counter.innerText = count++;
}, 20);

setTimeout(() => {
  followers.innerText = "Member's Online";
}, 5000);
