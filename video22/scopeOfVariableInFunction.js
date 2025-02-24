function one(){
let username = "hitesh"

      function two(){
      const website = "youtube"
      console.log(username);
      }
     // console.log(website)// we cannot acces website because it is defined inside the scope of two function 

      two()// here the two function print username because username act as a global variable for two

}
one()
//--------------expression-------------------------------
console.log(addone(5))
function addone(num){
    return num+1
}

//hoisting

console.log(addtwo(6))// we cannot print this it will give error
const addtwo = function(num){
    return num+2;
    //here addtwo is called expression ,it is a function but it holds value of a function
}
