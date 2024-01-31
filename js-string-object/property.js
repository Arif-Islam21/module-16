const person = {
  name: "Arif",
  age: 19,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav place": ["bandarban", "sundarban"],
};
// DOT NOTATION TO ACCES OBJECT VALUE
console.log(person.name);

// BRACKET NOTATION TO ACCES OBJECT VALUE
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);
console.log(person["fav place"]);
