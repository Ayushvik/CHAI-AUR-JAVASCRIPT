// Basic structure of Reduce 
// const array1 = [1,2,3,4]
// //0+1+2+3+4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator,currentValue) =>accumulator+currentValue,initialvalue
// );

// console.log(sumWithInitial);
// 0
// 0+1 = 1
// 1+2 = 3
// 3+3 = 6
// 6+4 = 10
//output :10
//using reduce with normal function 
// const myNums = [1,2,3,4,5]
// const myTotal= myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0) 
// console.log(myTotal)
//----------using reduce using arrow function--------------------------
const myNumbers = [1,2,3,4,5]
const myTotal = myNumbers.reduce((acc,curr) =>acc+curr,0)
console.log(myTotal)
//---------------shopping cart---------------------------------------
const shoppingCart = [
    {itemNmae:'js course',
        price:2999
    },

    {itemName:'java course ',
        price:1999
    },
    {itemName:'html course',
        price:99
    }
]
const myCart = shoppingCart.reduce((acc,item/*here item refers to individual objects in the array*/) => acc+item.price,0)
console.log(myCart);
