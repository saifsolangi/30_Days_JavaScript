let string = prompt("Write sentence")
let letterCheck = prompt('enter letter you wanna check the oocurance')

counter = 0;
for(let letter=0; letter<string.length; letter++){
    if (string[letter] === letterCheck){
        counter++
    }
}
console.log(`${counter}`)