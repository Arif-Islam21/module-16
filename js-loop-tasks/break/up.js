/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let number = 0;
while (number < 200) {
  if (number >= 100) {
    break;
  } else {
    number = number + number;
  }
  number++;
}
console.log(number);
