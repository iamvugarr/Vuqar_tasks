// 1. name, age və doing() fieldlarından ibarət 3 ədəd insan objecti yaradın.

// let vuqar = {
//     name: 'Vuqar',
//     age: 19,
//     doing: function () {
//         console.log(`${this.name} is watching world cup 2022`)
//     }
// }

// let ilqar = {
//     name: 'Ilqar',
//     age: 15,
//     doing: function () {
//         console.log(`${name} is writing his homework`)
//     }
// }

// let elsen = {
//     name: 'Elsen',
//     age: 17,
//     doing: function () {
//         console.log(`${name} is playin PUBG mobile`)
// }
// }

// 2.  deleteProperty(propertyName, obj) ->  verdiyimiz obyektden adini verdiyimiz property-ni silmek

// let ilqar = {
//     name: 'Ilqar',
//     age: 15,
//     doing: function () {
//         console.log(`${name} is writing his homework`)
//     }
// }

// delete ilqar.age
// console.log(ilqar)


// 3. obyektin propertylerinin sayini gosteren funksiya yazin

// let elsen = {
//     name: 'Elsen',
//     age: 17
// }

// let count=0
// for(let key in elsen){
//     count++
// }
// console.log(count)

// 4. deepClone(obj1, obj2) -> obj1deki butun propertyleri obj2ye menimsetsin

// let ilqarYeni = ilqar
// console.log(ilqarYeni)