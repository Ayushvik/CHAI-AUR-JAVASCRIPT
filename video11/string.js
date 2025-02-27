const name = "ayush"
const repoCount = 4

console.log(`hello my name is ${name} and my repo count is ${repoCount}`) //string interpolation

const gameName = new String('Need_For_Speed')
//console.log(gameName) // here we have created a string object.
console.log(typeof gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName) // original value remain same.
console.log(gameName[1])
console.log(gameName.charAt(2))
console.log(gameName.indexOf('d'))

const newString =gameName.substring(0,4) // IN SubString method we cann't use negative indexing
console.log(newString)

const anotherString = gameName.slice(-7,11) // IN slice we can use negative indexing
console.log(anotherString)

const newStringOne = "    ayush   "
console.log(newStringOne)
console.log(newStringOne.trim()) // IT REMOVES EXTRA SPACES

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url)
console.log(url.replace('%20','-')) //IT IS USED TO REPLACE A VALUE WITH DESIRED VALUE

console.log(url.includes('hitesh')) //USING THIS WE CAN KNOW A PARTICULAR VALUE IS PRESENT IN STRING OR NOT 
console.log(url.includes("sundar"))

console.log(gameName.split('_')) //THIS METHOS SPLITS YOUR STRING ON BASIS OF SOME SEPARATOR .IT WILL RETURN AN ARRAY
