/*Immediately Invoked Function Expression (IIFE)
We use this function to escape from the pollution of global vaariable ,also IIFE can be used to for immediate execution   */

//exampLe of IIFE
//This is named IIFE
(function chai (){
    console.log(`DB CONNECTED`)
})();
// don't forget to end with semicolon we have to explicitly add it   .

//second way
//This is simple IIFE
(()=>{
    console.log(`DB CONECTED TWO`)
})();

//how to take variable
((name)=>{
    console.log(`welcome to the server ${name}`)
})('ayush')
