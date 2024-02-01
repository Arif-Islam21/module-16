const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const revNumbers = [];
// for (const num of numbers) {
//   //   console.log(num);
//   revNumbers.unshift(num);
// }
// console.log(revNumbers);

// const reversed = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   reversed.unshift(num);
// }
// console.log(reversed);
const rev = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  //   console.log(numbers[i]);
  //   const nums = [numbers[i]];
  const nums = numbers[i];
  rev.push(nums);
}
console.log(rev);
