let content =
  "I am a programmer , wprking at x company x x . I am studyign at X institude";
const search = "x";
const replace = "y";
let words = content.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i] === search) {
    words[i] = replace;
  } else if (words[i] === "X") {
    words[i] = "Y";
  }
}
let newContent = words.join(" ");
console.log(newContent);
