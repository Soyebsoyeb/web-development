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
