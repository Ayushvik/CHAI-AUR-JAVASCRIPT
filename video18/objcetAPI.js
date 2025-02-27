const course = {
    coursename:"chai aur javascript",
    price:999,
    teacher:"hitesh choudhary"
}
//----------------------destructure karna-----------------
const {coursename:cn} = course //we can create shortcut of keys of an object
console.log(cn)
//-------------------------------------------------------
/*json  file is basically an object file
 which looks like this and also API is also object
{
 "name:"ayush",
 "coursename":"chai aur javascript"}*/

 // some times we get API in form of an array like this
 //[{},{},{}]