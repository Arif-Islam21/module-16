const mark = 90;
// if (mark <= 59) {
//   console.log("tumi fell");
// } else if (mark <= 69) {
//   console.log("Your Grade D");
// } else if (mark <= 79) {
//   console.log("Your Grade Is C");
// } else if (mark <= 89) {
//   console.log("your grade is B");
// } else {
//   console.log("You Have Got A");
// }
mark <= 59
  ? console.log("tumi fell")
  : mark <= 69
  ? console.log("You got D grade")
  : mark <= 79
  ? console.log("Grade C")
  : mark <= 89
  ? console.log("Grade B")
  : console.log("You Got A Grade");
