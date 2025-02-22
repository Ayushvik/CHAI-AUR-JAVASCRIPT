const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)// it will add the complete dc array to marvel array i.e array ke ander array ,merger nahi hoga array ke ander ek aur array a jaeaga
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

//marvel_heroes.concat(dc_heroes)// this will also give same output as push  BUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTTT

//const allHeros = marvel_heroes.concat(dc_heroes)
//console.log(allHeros) //basically concat merge to give new array but push add the element in the existing array

const all_new_heros =[...marvel_heroes,...dc_heroes]//now the elements of array have become individual and got spread in the new. this is called spread function 
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(3);//it flates the looped array into a single new array also we write about the depth upto which we want to spread
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//tells it array or not
console.log(Array.from("Hitesh"))// creates an array
console.log(Array.from({name:"hitesh"}))// it will give empty array because it it confused between array to make of key or value

console.log(Array.from(Object.keys({name:"ayush",age:21,gender:"male"})))// object to array ,array of keyvalues

console.log(Array.from(Object.values({name:"ayush",age:21,gender:"male"})))// object to array,array of values

console.log(Array.from(Object.entries({name:"ayush",age:21,gender:"male"})))//object to array,array of values/key

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))//converts variable to an array