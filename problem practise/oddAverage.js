const numbers = [12, 32, 43, 54, 65, 76, 23, 65, 76, 87, 23, 21];
const average = [];
let sum = 0;
function oddAverage(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 1) {
      average.push(number[i]);
    }
  }
  for (let i = 0; i < average.length; i++) {
    sum += average[i];
  }
  const avg = sum / average.length;
  return avg;
}
const result = oddAverage(numbers);
console.log(result);
