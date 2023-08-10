
// function isPrime(n) {
//   if (n < 2)
//     return `${n} is not a prime number`
//   else {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0)
//         return `${n} is not prime number`
//     }
//     return `${n} is prime number`
//   }
// }
// console.log(isPrime(2))


function checkPrime(inital, end) {

  let numArray = []
  for (let i = inital; i <= end; i++) {
    numArray.push(i)
  }

  numArray = numArray.filter((number) => {

    if (number < 2) return false
    else {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) return false
      }
    }
    return true
  });

  return numArray

}

console.log(checkPrime(1, 100));