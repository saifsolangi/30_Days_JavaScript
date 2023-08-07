

// reverse String
function reverseString(str) {
    temp = str.length - 1
    reverse = ""
    while (temp + 1) {
        reverse += str[temp]
        temp--
    }
    return reverse
}


// vowels counter
function checkVowels(str) {
    temp = str.length - 1
    count = 0
    while (temp + 1) {
        if (str[temp] === 'a' || str[temp] === 'e' || str[temp] === 'i' || str[temp] === 'o' || str[temp] === 'u') {
            count++
        }
        temp--
    }
    return count
}


// Factorial
function findFactorial(n) {
    let factorial = 1;
    while (n > 1) {
        factorial *= n
        n--
    }
    return factorial
}
console.log(findFactorial(5))



