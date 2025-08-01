let score = "33abc";

console.log(typeof score)
console.log(typeof(score))

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber)
console.log(valueIntNumber)
// "33" --> 33
// "33abc" --> NaN(not a number) but data type is Number
// NaN is also a number which can be a not integer
// if null is convered in the number --> 0
// if undefined is conved --> NaN (not a number)


let isLogedIn = 1

let booleanIsLoggedIn = Boolean(isLogedIn)
console.log(booleanIsLoggedIn)

// 1 -> true
// 0 -> false
// "" -> false
// "anything" -> true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ***************************** OPERATION ******************************

let value = 3
let negValue = -value
console.log(negValue)

console.table([2+2, 2-2, 2*2, 2**5, 2/10, 10%3])

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")