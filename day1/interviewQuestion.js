/*
[435,43,3,5,6,32,6,5,33,5,6,32,5,6,3,-23,-35,-32,-67,0]

on the given array what are solutions to these questions use only loop and if

1. repetative value in list/array
2. highest value in array
3. second highest value in array
4. highest negative value in array
5. second highest negative value in array
6. sum of all positive numbers in array
7. sum of all negative numbers in array
8. average of all numbers in array

*/

// Sample array with some repetitive elements
const array = [-1, 2, 3, 2, 2, 4, 3, 7];


function findRepetative(array) {

    // creating dictionary to track record of repetative elements
    const elementCounts = {}
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (elementCounts[element]) {
            elementCounts[element]++
        }
        else {
            elementCounts[element] = 1
        }
    }

    // creating empty arry for all the repetative elements
    let repetativeElements = []
    for (element in elementCounts) {
        if (elementCounts[element] > 1) {
            repetativeElements.push(Number(element))
        }
    }
    return repetativeElements, elementCounts
}


// finding largest number
function findLargest(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i - 1]
        if (currentElement > largest) {
            largest = currentElement;
        }
    }
    return largest
}


// finding 2nd largest number
function findSecLargest(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i - 1]
        if (currentElement > largest) {
            largest = currentElement;
        }
    }
    return largest
}

// finding largest Negative number
function findLargestNegative(array) {
    let largest = null;
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]
        if (currentElement < largest) {
            largest = currentElement;
        }
    }
    return largest
}

// finding 2bd largest Negative number
function findsSecLargestNegative(array) {
    let largest = null;
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i + 1]
        if (currentElement < largest) {
            largest = currentElement;
        }
    }
    return largest
}


// sum of all positve numbers
function sumOfAllPositive(array) {

    let sumPositive = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sumPositive += array[i]
        }
    }
    return sumPositive
}


// sum of all positve numbers
function sumOfAllNegative(array) {
    let sumNegative = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            sumNegative += array[i]
        }
    }
    return sumNegative
}

// Average
function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

console.log(sumOfAllPositive(array))
console.log(sumOfAllNegative(array))
console.log(findRepetative(array))
console.log(findLargest(array))
console.log(findLargestNegative(array))
console.log(findSecLargest(array))
console.log(findsSecLargestNegative(array))
console.log(findAverage(array))
