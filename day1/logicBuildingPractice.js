

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



// fibonacci Series
function fibonacciNumbers(n) {

    // Initialize variables
    let previous = 0;
    let current = 1;
    let count = 2;

    // Print the first two Fibonacci numbers
    console.log(previous);
    console.log(current);

    // Loop to generate Fibonacci series
    while (count < n) {
        // Calculate the next Fibonacci number
        const next = previous + current;

        // Print the generated Fibonacci number
        console.log(next);

        // Update variables for the next iteration
        previous = current;
        current = next;
        count++;
    }

}

fibonacciNumbers(7)


