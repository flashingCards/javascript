const accountId = 122323
let accountEmail = "hell@world.com"
var accountPassword = "pass"
accoutnCity = "Delhi"

// undefined
let accountState

/*
perfer to not use var
it have issues with block scope and funcional scope
*/

// we must always use let as it have functionality of scopes
// it can be used in defined scopes not interupting outer scope

// accountId = 222                              this is Not allowed
accountEmail = "new@emai.com"
accountPassword = "newPass"
accoutnCity = "Mumbai"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accoutnCity, accountState])