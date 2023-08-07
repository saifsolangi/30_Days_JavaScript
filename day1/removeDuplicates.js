// Sample array with some repetitive elements
const array = [2, 3, 2, 2, 4, 3, 7];

function removeDuplicates(array) {

    // creating dictionary to track record of duplicate elements
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

    // creating array to store only unique values
    let unique = []
    for (element in elementCounts) {
        if (elementCounts[element] === 1) {
            unique.push(Number(element))
        }
    }
    return unique
}

console.log(removeDuplicates(array))