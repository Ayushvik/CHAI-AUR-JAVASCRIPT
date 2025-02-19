//arrays in javascript are re-sizeable and contain mix of different datatypes. 
// types to declare arrays
const myArr = [1,2,3,4,5];
const myArr2 = new Array(1,2,3,4)
const myHeroes = ["shaktiman","nagraj"]

//Aray methods


myArr.push(6) //to add an element in array in the end 
console.log(myArr)

myArr.pop()// delete last element
console.log(myArr)

myArr.unshift(10)
console.log(myArr)// add element at the first

myArr.shift()// removes the first element
console.log(myArr)

console.log(myArr.includes(9))// tell element is present or not 

console.log(myArr.indexOf(4))// tell index of the element

const newArr = myArr.join();// this function converts array into a string 

console.log(myArr)// array
console.log(newArr)// array got converted into string 

//slice,splice
console.log("A",myArr)//original array

const myn1 = myArr.slice(1,3)//does not include last index also it does not mnipulate the original array
console.log("B",myArr)
console.log(myn1)


const myn2 = myArr.splice(1,3)//includes last index and manipulates the original arrar
console.log("C",myArr)
console.log(myn2)

 

