const colors = ["red", "blue", "green", "yellow", "orange"];
// let reverse = [];
// for (let i = 0; i < colors.length; i++) {
//   //   console.log(colors[i]);
//   reverse.unshift(colors[i]);
// }
// console.log(reverse);
let reverse = [];
for (let i = colors.length - 1; i >= 0; i--) {
  //   console.log(colors[i]);
  reverse.push(colors[i]);
}
console.log(reverse);
