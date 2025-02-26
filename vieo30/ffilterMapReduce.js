//for each loop koi directyl value retrun nahi karta
const coding  = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    return item
})
console.log(values)
//this will return undefined because foreach loop does not return any value
//is chiz ke liye introduce hua filter

// const myNums = [1,2,3,4,45,56,7,78,9]
//const newNums = myNums.filter((num) =>num>45)
//filter k structure filter(ek reference name values ke liye) => condtion
//filter jo hai value retrun karta hai
//-----------------------OR----------------------------------------------
//const newNums = myNums.filter((num)=>{
   // return num
    //jab hum curly braces'scope' k use karte hai tab return likhana padhata hai 
//})
//console.log(newNums)
//----------indirect way to return value from foreach loop---------------
// const myNums = [1, 2, 3, 4, 45, 56, 7, 78, 9];
// const newNums = []; 

// myNums.forEach((nums) => {
//    //newNums.push(nums)
//    if(nums>4){
//     newNums.push(nums)
//    }
// });

//console.log(newNums);
//-----------------------------------------------------------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const historyBooks = books.filter((bk) => bk.genre==='History')
//console.log(historyBooks)
const books2007 = books.filter((bk)=>bk.publish>1995 )
//console.log(books2007);
const book1995history = books.filter((bk) =>
{return bk.publish >=1995 && bk.genre==='History'
})
//console.log(book1995history)

