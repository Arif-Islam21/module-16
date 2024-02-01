/**
 * Looping Techniqe
 * for loop
 * while loop
 * do while --> ignore
 * for of--> array loop korte bebohar korbo
 * for in --> object loop korte bebohar korbo
 */

const friends = ["Elon", "Zeff", "Bill", "Mark"];
// for (const friend of friends) {
//   console.log(friend);
// }

for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}
let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}
