const regularUser = {
    email:"some@gmail.com",
    fullname:{                   //nesting of object
        firstName:"ayush",
        lastName:"vishwakarma"
    }
}
//console.log(regularUser)
//console.log(regularUser.fullname.firstName)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign(obj1,obj2,obj3) //it will assign all objects into a new object.
// console.log(obj4)
const obj5 = {...obj1,...obj2}// spread operator
// console.log(obj5)

const tinderUser = {
    id:"123abc",
    name:"Sammy",
    isLoggedIn:false
}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)) // it will return keys of the object in form of an array 
// console.log(Object.values(tinderUser))// same
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'))// return object contain that particular property or not

const user = [
    {
        email:"some@gmail.com",
        id:12,
        name:"ayush"
    },
    {
        email:"random@gmail.com",
        id:13,
        name:"karan"
    },
    {
       emial:"common@gamil.com",
       id:14,
       name:"vaibhav"

    }
]

console.log(user[1].email) //here user[] represent object

