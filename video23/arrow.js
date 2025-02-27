// this refers to the current context.
const user = {
    username:"hitesh",
    pricce:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
         //here this will give the current value of username
        console.log(this)
       //here it will return the object of which it is in scope of 
        
    }
}
user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
//console.log(this)// here this will return {} because it refers to global environment.as there is no context in the global

//browser k global object Window hai isliye agar hum node ke andar this use karenge to toh empty object milta hai aur browser ke ander window.

// function chai (){
//     let username ="hitesh"
//     console.log(this)
//     // here if we will print this it will give multiple values
//    // console.log(this.username)
//     //here if we will print this it will return undefined.thereforewe can use this in object but not in functions 
// }
//chai()

//-------------------arrow function -------------------------
// const chai =function(){
//     let username = "ayush"
//     console.log(this.username)
//     // here this.username will give undefined.
// }

//instead of using function keyword we will use => .this will create arrow funcion
// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
//     //here this will return empty paranthesis
//     console.log(this.undefined)
//     //here this will return undefined
// }
//chai()
//-------implicit retrun-------------------------------------
//this is one type to use arrow function 
// const addtwo = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addtwo(2,5))

// const addtwo =(num1,num2) => num1+num2
// //this is called implicit retrun
// console.log(addtwo(3,4))

