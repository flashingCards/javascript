// primitive and non primitive/reference

// premitive --> String, Number, Boolean, Null, Undefined, Symbol, BigInt

// refence(non premitive) --> array, objects, funcions

const score = 100
const scoreValue = 322.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID)

const binName = 4454548454541n // writing n at the end makes it big iint

// this is an array
const names = ["lallu", "mallu", "kallu"]

// object
let myObject = {
    name: "lallu",
    age: 22
}

const myFunction = function() {
    console.log("hello world")
}

myFunction()
console.log(typeof myFunction)
// type of myFuncion is --> funcion which is object
// --> OBJECT funcion or funciont OBJECT

///////////////////////////////////////////////////////////////

// Memory -> Stack (primitive), Heap (non-primitive)

let name = "myName"
let nextName = name
nextName = "myNewName"

console.log(nextName)
console.log(name)

// non premitive data --> Heap memory
let userOne = {
    userId: "id1",
    userUPI: "abcd1"

}

let userTwo = userOne
userTwo.userUPI = "abcd2"

console.log(userOne)
console.log(userTwo)