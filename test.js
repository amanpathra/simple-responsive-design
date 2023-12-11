function isPrime(number) {
  // Check if the number is less than 2, which is not prime
  if (number < 2) {
    return false;
  }

  // Check if the number is 2, which is prime
  if (number === 2) {
    return true;
  }

  // Check if the number is even, which is not prime
  if (number % 2 === 0) {
    return false;
  }

  // Check if the number is divisible by any odd number between 3 and the square root of the number
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any of the above, it is prime
  return true;
}

console.log(isPrime(7581));