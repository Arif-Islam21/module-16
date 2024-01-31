const collage = {
  name: "vge",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 february"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      marit: "top",
    },
  },
};
delete collage.class;
console.log(collage.unique.result.gpa);

console.log(collage);
