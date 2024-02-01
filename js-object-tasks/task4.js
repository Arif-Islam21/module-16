let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
const keys = Object.keys(student);
let numbers = 0;
for (let i = 0; i < keys.length; i++) {
  numbers++;
}
console.log(numbers);
