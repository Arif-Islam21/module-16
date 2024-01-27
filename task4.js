const score = 90;
const friendScore = 35;
if (score > 80) {
  if (friendScore > 80) {
    console.log("go for a lunch");
  } else if (friendScore < 80 && friendScore > 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore > 40) {
    console.log("keep friend message unseen");
  } else {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}
