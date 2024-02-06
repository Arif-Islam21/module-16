function inchToFeet(inch) {
  const feetValue = inch / 12;
  const feet = Math.floor(feetValue);
  const inchValue = inch % 12;
  const result = `The Answer is ${feet} feet ${inchValue} inch`;
  return result;
}
console.log(inchToFeet(14));

// mile to kilometer
