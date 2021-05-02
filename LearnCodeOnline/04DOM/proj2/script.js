const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const centerCircle = document.querySelector(".center");
// console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

var pinkElementColor = getBgColor(pink);
var orangeElementColor = getBgColor(orange);

// pink.addEventListener("mouseenter", () => {
//   centerCircle.style.background = pinkElementColor;
// });

// orange.addEventListener("click", () => {
//   centerCircle.style.background = orangeElementColor;
// });

const circleColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    centerCircle.style.background = color;
  });
};

circleColorChanger(red, getBgColor(red));
circleColorChanger(cyan, getBgColor(cyan));
circleColorChanger(violet, getBgColor(violet));
circleColorChanger(orange, getBgColor(orange));
circleColorChanger(pink, getBgColor(pink));
