const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)// it will add the complete dc array to marvel array i.e array ke ander array ,merger nahi hoga array ke ander ek aur array a jaeaga
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

//marvel_heroes.concat(dc_heroes)// this will also give same output as push  BUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTTT

const allHeros = marvel_heroes.concat(dc_heroes)
console.log(allHeros)