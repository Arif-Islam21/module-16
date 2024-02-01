let content =
  "I am a programmer , wprking at x company x x . I am studyign at X institude";

const words = content.split(" ");
let upContent = [];
for (let i = 0; i < words.length; i++) {
  const value = words[i];
  // const upWords = value[0].toUpperCase();
  upContent.push(value[0]);
}
console.log(upContent);
