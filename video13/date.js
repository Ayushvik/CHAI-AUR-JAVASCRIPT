let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString()) // universal time+date
// console.log(myDate.toISOString()) 
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleTimeString()) // tells us time
// console.log(myDate.toDateString()) // sun feb 16 2025
// console.log(typeof myDate)
// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString())

// --------------------------------------------------------

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMinutes())
console.log(newDate.getHours())
console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))

 