const name = "red-blue"
const marks = 100


// console.log(name + count + "hello") // this is not used in mordern world

console.log(`hello my name is ${name} i have scored ${marks}`)

const gamesName = new String("immortal")

console.log(gamesName.__proto__)
console.log(gamesName[0])

console.log(gamesName.length)
console.log(gamesName.toUpperCase())
console.log(gamesName.charAt(3))
console.log(gamesName.indexOf('t'))

const newString = gamesName.substring(0, 4)
console.log(newString)

const anotherName = gamesName.slice(-8, 4)
console.log(anotherName)

const extraName = "        nobita          "
console.log(extraName.trim)
// there are two more funcion trimStart and trimEnd

const url = "https"