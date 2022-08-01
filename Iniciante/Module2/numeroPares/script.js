Array.from({ length: 100 }, (item, index) => {
  let number = index + 1;

  if (number % 2 === 0) {
    console.log(number);
  }
});
