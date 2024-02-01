const text = "A quick brown fox can run over the lazy dog";
let contain_a;
let contain_e;
let contain_i;
let contain_o;
let contain_u;
let statement;
for (let i = 0; i < text.length; i++) {
  const word = text[i];
  if (word === "a") {
    contain_a = true;
  } else if (word === "e") {
    contain_e = true;
  } else if (word === "i") {
    contain_i = true;
  } else if (word === "o") {
    contain_o = true;
  } else if (word === "u") {
    contain_u = true;
  }
}
if (
  contain_a === true &&
  contain_e === true &&
  contain_i === true &&
  contain_o === true &&
  contain_u === true
) {
  statement = true;
} else {
  statement = false;
}
console.log(statement);
