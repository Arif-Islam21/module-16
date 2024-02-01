let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
const keys = Object.keys(myObject);
for (let i = 0; i < keys.length; i++) {
  //   console.log(typeof myObject[keys[i]]);
  const key = keys[i];
  const type = typeof myObject[keys[i]];
  console.log(`key: ${key} | type: ${type}`);
}
// console.log(keys);
// console.log(key, type);
