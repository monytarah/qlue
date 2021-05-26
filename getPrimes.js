function isPrime (num) {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

function getPrimes (num) {
  let output = []
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      output.push(i)
    }
  }
  return output
}

console.log(getPrimes(5))
console.log(getPrimes(10))
