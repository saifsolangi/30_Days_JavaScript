/*

arr = [1,2,3,4,5]
let double  = arr.map((x)=>x*2)
let greaterThan2 = arr.filter((x)=> x>2)
let sum = arr.reduce((acc,curr)=>acc+=curr,0)

let findMax = arr.reduce((max,curr)=>{if (curr>max){max = curr} return max},0)


console.log(double)
console.log(greaterThan2)
console.log(sum)
console.log(findMax)
*/


// real world Example like API data

const users = [
    {'firstName':'Saif','lastName':'Ali','age':22},
    {'firstName':'shahzaib','lastName':'Hyder','age':18},
    {'firstName':'Hyder','lastName':'Ali','age':25},
    {'firstName':'kashif','lastName':'Ali','age':18},
    {'firstName':'Rameez','lastName':'Raja','age':20},
]


// const output = users.map(x=>x.firstName+' '+x.lastName)
// console.log(output)


// create an object in which it counts the users according to age like {18:2, 22:1,....}
/*
const output = users.reduce((user, curr)=>{
    
    if(user[curr.age]){
        user[curr.age]++
    }
    else{
        user[curr.age]=1
    }
    return user 
}, {})

console.log(output)
*/


// get the first name of all the users whose age is greater than 18

// const output = users.filter(user=>user.age>18).map(user=>user.firstName)
const output = users.reduce((user,curr)=>{
    if (curr.age>18){
        user += curr.firstName+" "
    }
    return user
},[])
console.log(output)

