export function parseInput(query) {
  let numbers = query;

  if (numbers.includes('\n')) {
    numbers = numbers.split('\n').map(num => num.trim()).filter(num => num).join(',');
  }

  if (numbers.includes(',')) {
    numbers = numbers.split(',').map(num => num.trim()).filter(num => num).join(',');
  }

  return numbers;
}

export function validateInput(numbers) {
  let validationErrors = [];

  numbers.split(',').forEach(number => {
    if (number.length !== 13 && !validationErrors.includes('Serial numbers should be 13 characters long.')) {
      validationErrors.push('Serial numbers should be 13 characters long.');
    }
  });

  return validationErrors;
}