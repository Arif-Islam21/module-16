let reverse = "";
const sentence = "I want to learn full stack web dev";
for (const letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);

for (let i = 0; i < sentence.length; i++) {
  //   console.log(sentence[i]);
  const letter = sentence[i];
  reverse = letter + reverse;
}
// console.log(reverse);
const rev3 = sentence.split("").reverse().join("");
console.log(rev3);
