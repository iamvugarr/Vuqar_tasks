// 1. Funksiya yazin ki, array ve eded verim. Hemin ededden basqa digerlerinden ibaret yeni array qaytarsin Mes, removeElement( [1,2,3,4] ,3 ) // [1,2,4]

// const removeElement = (arr, eded) => {
//     const indexOfEded = arr.indexOf(eded)
//     arr.splice(indexOfEded, 1)
//     return arr
// }

// console.log(removeElement([1,86,8,9], 8))



// 2. Funksiya yazin ki, ona massiv argument verim. O massivdeki cut ededlerden ibaret massivi geri qaytarsin.

// const returnOdds = (arr) => {
//     let odds = [];
//     arr.forEach((elem) => {
//         if(elem % 2 == 0) {
//             odds.push(elem)
//         }
//     }) 
//     return odds
// }
// console.log(returnOdds([0,1,2,3,4,5,6,7,8,9]))



// 3.  Reqemlerden ibaret massiv yaradin. Massivdeki en boyuk ededi silin. (sort ve splice istifade edin) 

// const removeBiggest = (arr) => {
//     arr.sort((a,b) => a-b)
//     arr.splice(arr.length-1 , 1)
//     return arr
// }
// console.log(removeBiggest([21,878,8,89977,9,78]))




