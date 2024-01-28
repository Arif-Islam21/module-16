// const dayOfWeek = 4;
// switch (dayOfWeek) {
//   case 1:
//     console.log("saturday");
//     break;
//   case 2:
//     console.log("Sunday");
//     break;
//   case 3:
//     console.log("Monday");
//     break;
//   case 4:
//     console.log("tuesday");
//     break;
//   case 5:
//     console.log("wednesday");
//     break;
//   case 6:
//     console.log("thusday");
//     break;
//   case 7:
//     console.log("friday");
//     break;
//   default:
//     console.log("Invalid Input");
// }

// const lightCondition = true;
// switch (true) {
//   case lightCondition:
//     console.log("light is on");
//     break;

//   default:
//     console.log("light is off");
//     break;
// }

function calcGrading(score) {
  let gradingScore;
  switch (true) {
    case score <= 100 && score >= 90:
      gradingScore = "A";
      break;
    case score <= 89 && score >= 80:
      gradingScore = "B";
      break;
    case score <= 79 && score >= 70:
      gradingScore = "C";
      break;
    case score <= 69 && score >= 60:
      gradingScore = "D";
      break;
    case score <= 59 && score >= 50:
      gradingScore = "E";
      break;
    case score > 100 && score < 0:
      gradingScore = "F";
      break;
    default:
      gradingScore = "Invalid";
      break;
  }
  return `You Got ${gradingScore} Grede`;
}
const first = calcGrading(60);
console.log(first);
