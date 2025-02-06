console.log(typeof undefined)     // unidentified
console.log(typeof null)          // object


let score1 = "33"
console.log(typeof score1)
let score2 = 33
console.log(typeof(score2))


// CONVERSION OPERATIONS

// (1) NUMBER

let valueInNumber1 = Number(score1)
console.log(valueInNumber1)

let score3 = "333abcD"
let valueInNumber2 = Number(score3)
console.log(valueInNumber2) // NaN 
console.log(typeof(valueInNumber2)) // Number type is given even though it is not a number 
// null -> 0
// undefined -> NaN
// true -> 1 ; false -> 0 
// string -> NaN


// (2) BOOLEAN  

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)


let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)


let isLoggedIn3 = "hitesh"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)

// Can be used for " String "




// Comparison of datatypes in javascript

console.log(undefined >= 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)


const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id == anotherId)



// Primitive datatypes
// 7 types:-> String,Number,Boolean,null,undefined,Symbol(for unique) ,BigInt
// Reference datatypes(non-primitive)
// Array,Objects,Functions

const hero = ["me","you","he"]

let myObj = {
    name:"hitesh",
    age:22
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof hero)  //object
console.log(typeof myObj)  // object
console.log(typeof myfunction) //function