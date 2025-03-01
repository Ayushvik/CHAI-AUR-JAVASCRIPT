// const promiseOne = new Promise(function(resolve, reject) {
//     // Promise is created
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve(); // Resolving the promise
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log('Promise consumed');
// });

// // Second Promise with correct syntax
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async 2 resolved');
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log('Promise consumed for Async 2');
// });
//------------------------------------------------------------------
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"ayushvishwakarma27112gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })
//--------------------concept of chaining---------------------------
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = false;  // Set to false to test success case
//         if (!error) {
//             resolve({ username: 'ayush', email: 'xyz@gmail.com' });
//         } else {
//             reject('ERROR: Something went wrong'); // Fixed typo
//         }
//     }, 1000);
// });

// promiseFour
//     .then((user) => {
//         console.log(user); 
//         return user.username;
//     })
//     .then((username) => {
//         console.log(username); 
//         //this will print if no error
//     })
//     .catch((error) => {
//         console.log(error); 
//         //this will print if error
//     })
//     .finally(()=>console.log(`syntax finally resolved or rejected`))
//     //yeah hume bata deta hai finaally jo bhi hona tha hogaya

//    const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error  = true;
//         if(!error){
//             resolve({username:"javascript",password:'123'})
//         }
//         else{
//             reject('ERROR:JS  went worng')
//         }
//     },1000)
//    })
//    async function consumrPromiseFive() {
//     try {
//         const respone = await promiseFive
//         console.log(respone)
//     } catch (error) {
//         console.log(error)
//     }
//    }
//    consumrPromiseFive()

//    async function getAlluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E',error)
//     }
//    }
//    getAlluser()
// ---------------------------or samethinf using thrn and catch-----------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()})
.then((data)=>console.log(data))
//yaha pe hume await k use nahi karna padhega bacuase ek then complete hoga tabhi dusara await chalu hoga
.catch(()=> console.log(error))

