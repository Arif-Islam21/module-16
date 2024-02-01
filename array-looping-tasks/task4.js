const statement = "I am a hard working person";
const sliced = statement.split(" ");
// console.log(sliced);
let reverse = "";
for (let i = 0; i < sliced.length; i++) {
  //   console.log(sliced[i]);
  reverse = " " + sliced[i] + reverse;
}
console.log(reverse);
