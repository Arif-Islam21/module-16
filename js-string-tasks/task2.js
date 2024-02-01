const myself =
  "I am A learner, I am learning Web development I will become A web developer Inshaallah ";
let Count = 0;
for (let i = 0; i < myself.length; i++) {
  //   console.log(myself[i]);
  const task = myself[i];
  if (task === "a" || task === "A") {
    Count += 1;
  }
}
console.log(Count);
