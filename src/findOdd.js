function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  }
  return true;
}

function excludeNumberFromArray(num, arr) {
  return arr.filter((n) => n !== num);
}

export default function findOdd(numbers) {
  let output = 0;
  while (numbers[0]) {
    // Save current iteration state
    const currentNumber = numbers[0];
    const currentLength = numbers.length;

    // Exclude current numbers from array
    numbers = excludeNumberFromArray(currentNumber, numbers);

    // Find difference to detect occurs
    const updatedLength = numbers.length;
    const occurs = currentLength - updatedLength;

    // Push to output current number if occurs is odd
    if (isOdd(occurs)) {
      output = currentNumber;
    }
  }

  // Return output
  return output;
}
