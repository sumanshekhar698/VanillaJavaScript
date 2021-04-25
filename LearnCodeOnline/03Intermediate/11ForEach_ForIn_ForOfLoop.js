const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

//for EACH
myStates.forEach((s) => console.log(s));
myStates.forEach((s) => console.log(s));
// for each takes a call backfunction

//for OF
for (const n of names) {
  console.log(n);
}

//for IN
for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
