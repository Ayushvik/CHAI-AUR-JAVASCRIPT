function add(number1,number2){ // number1,number2 is called parameters

    console.log(number1+number2)
}
//add(3,4) // here 3,4 are arguments

const result = add(3,5)
console.log("Result:",add);

function loginUserMessage(username = "dodo"){
    // here we have defined a default value of username if we will argument then that argumment will be taken else the default value is used
    if(!username /*username===undefined*/){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
    // here in this case the function will return the value but will not print it so we have to write it in as console.log(loginUserMessage)
}

console.log(loginUserMessage("ayush")) 
console.log(loginUserMessage())

function calculateCarPrice(val1,val2,...num1){
    //...num1 looks we are using spread operator but here when we use it as a parameter it is called REST operator
    return num1
}
console.log(calculateCarPrice(200,400,500,250))// this will return [500,200]
// let see how we can use objects in function

const user = {
    username:"hitesh",
    price:"1001"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
//-------------------or-----------------------------------
handleObject({
    username:"ayush",
    price:6969
})

//let see how we can use array in function 

const myNewArray = [1,23,4]

function handleArray(getArray){
    return getArray[1]
}

console.log(handleArray(myNewArray))
console.log(handleArray([23,13,13,4]))