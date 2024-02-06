const names = [
  "Arif",
  "hasan",
  "kabir",
  "shafiq",
  "rafiq",
  "hasan",
  "kabir",
  "haq",
  "rafiq",
  "enamul",
];
function duplicateRMV(array) {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (duplicates.includes(array[i]) === false) {
      duplicates.push(array[i]);
    }
  }
  return duplicates;
}

console.log(duplicateRMV(names));
