// metohs to create objects
                                                                    
//object.create// this method is a constructive method to create object which creates singleton 

// object literals

const mySym = Symbol("key1")//declaration of symbol
const jsUser = {
    name:"ayush",
    "full name":"ayush vishwakarma",
    [mySym]:"key1",//use of symbol in object
    age:22,
    gender:Male,
    location:"pune",
    email:"ayushvik@gmail.com",
    lastLoginDays:["Monday","Saturday"]}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

jsUser.email = "ayushvishwakrma2711@gmail.com"// this will change the value of email in the object

Object.freeze(jsUser)// this will freeze all the values of the object  also we can freeze particular element i.e we cannot change it again
jsUser.email = "ghtgbrughrubrubuhbie@gmail.com"

console.log(jsUser)
