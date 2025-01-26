var score  ="33"
console.log( typeof score)


var score = Number("33abc")// explicit conversion
console.log(typeof score)
console.log(score)


let numberInString = Number(score)//explicit conversion
console.log(typeof numberInString)

//"33"=> 33
//"33BC"=> NaN
//true =>1; false => 0


let isLoggedIn = 1;
console.log(isLoggedIn)
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn)//value of 1 is true/value of 0 is false

let stringNumber = String(33)
console.log(typeof stringNumber)
console.log(stringNumber)
