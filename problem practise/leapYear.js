function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("your year is a leap year");
  } else {
    console.log("Your year is not a leap year");
  }
}
leapYear(2000);
