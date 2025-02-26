// for of 

// for of loop constains a =n interator and we have to mention where we have to apply this loop.Then it will automatically handle the size/increment/decrement/intial value.We cann't directly interate over objects usning for of loop

const myArray = [23,12,45,56,34]
for (const element of myArray) {
   // console.log(element);
}

const greet ="hello wolrd!"
for (const element of greet) {
    if(element==' '){
       // console.log(`space detected!`);
        break;
        
    }
    //console.log(`Each chr is ${element}`);
    
}

//Maps
//They only store unique values.

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
//console.log(map);
//lets see how we can iterate over maps using loops

for (const key of map) {
   // console.log(key);
    
}
// by this we will the values in the form of an array
for (const [key,value] of map) {
    // here we are destructing the value
    //console.log(key,':',value);
    
}
//------------------we cann't directly iterate over object using [for of ] loop but we can iterate indirectly 
const person = { name: "Ayush", age: 21, city: "Delhi" };

for (const key of Object.keys(person)) {
  //  console.log(`Key: ${key}, Value: ${person[key]}`);
}
//---------------------------------------------------------------------
//for object generally we use for in loop
const language = {
    js:'javascript',
    cpp:'c++',
    java:'java',
    swift:'swift by apple'

}
for (const key in language) {
   {
        const element = language[key];
        // console.log(key)
      //  console.log(`${key}: ${element}`)
        
    }
}
//----------------------------------------------------------------------
//Using for in loop for arrays

const programming = ["js","cpp","java","rb","swift"]
for (const key in programming) {
    //  console.log(`${key}: ${programming[key]}`)
    
}
// we cann't directly iterate over map using for in loop


//--------------------------for each loop-------------------------------
const coding = ["js","cpp","java","python","ruby"]
coding.forEach( function (val){
   // console.log(val)
})


//for each with arrow function 
coding.forEach( (val)=>{
   // console.log(val)
})

//using a function inside for each loop
function printme(item){
   // console.log(item)
}
coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
   // console.log(item,index,arr);
})

const myObject =[
{languageNmae:"java",
 languageFileName:"java"
},
{languageNmae:"javascript",
 languageFileName:"js"
},
{languageNmae:"python",
languageFileName:"py"
}
]

myObject.forEach((val)=>{
   // console.log(val)
   //console.log(val.languageFileName)
   //console.log(Object.keys(val))
})


