function doubleNumbers(numbers) {
  // create a new empty array
  // loop through numbers array
  // double the number and push to empty array  .push method
  // print the new array

  let doubleNums = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i] * 2; // num = 2 * 2 = 4 at index 0
    //num = 3 * 2 = 6 at index 1
    doubleNums.push(num);
  }
  console.log(doubleNums);
}

doubleNumbers([2, 3, 4, 5]);
