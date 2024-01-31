const mobile = {
  brand: "samsung",
  price: 26000,
  color: "black",
  camera: "12mp",
  isNew: false,
};

// for of : array
// for in : object
for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}
