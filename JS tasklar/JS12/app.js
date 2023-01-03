// 1. Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// const returnNegatives = (arr) => {
//     arr.forEach((elem) => {
//         if(elem < 0){
//             console.log(elem)
//         }
//     })
// }
// returnNegatives([0,56,-8,4,-5])


//----------------------------------------------------------------------------------------------------------------


// 2. Adlar massivini parametr kimi qebul eden bir funksiya yazin, bele ki, o funksiyadan bize en uzun adi cixaracaq. 
// mes: // let arr = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles'] 
// findLongestName(arr); // 'muhammad'

// let arr = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles'] 
// const findLongestName = (massiv) => {
//     let uzunAd = ''
//     massiv.forEach((elem) => {
//         if(elem.length > uzunAd.length){
//             uzunAd = elem
//         }
//     })    
//     return uzunAd
// }
// console.log(findLongestName(arr));


//---------------------------------------------------------------------------------------------------------------- 


// 3. const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]; massivi verilib. printWithIndex adli funksiya yaradin ve onu names.forEach methoduna callback kimi verin. Ekrana adin index-i ve adi cixarsin. (0-Michael, 1-Trevor ve.s.)  
//  names.forEach(printWithIndex);

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// const printWithIndex = (ad, index) => {
//     console.log(`${index} - ${ad}`)
// }

// names.forEach(printWithIndex)


//----------------------------------------------------------------------------------------------------------------


// 4. Asagidaki funksiyalari yazin:
// kebabToSnake('ali-greenheart');//ALI_GREENHEART
// SnakeToKebab('JAVASCRIPT_IS_HELL'); // javascript-is-hell

// const kebabToSnake = (str) => str.replaceAll('-', '_').toUpperCase()
// const SnakeToKebab = (str) => str.replaceAll('_', '-').toLowerCase()

// console.log(kebabToSnake('ali-greenheart'))
// console.log(SnakeToKebab('JAVASCRIPT_IS_HELL'))


//----------------------------------------------------------------------------------------------------------------


// 5. let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// const netice = numbers.map((elem) =>  elem < 0 ? elem * (-1) : elem * 2 )
// console.log(netice)


//----------------------------------------------------------------------------------------------------------------


// 6. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George']
// const netice = names.filter((ad) =>{
//     return ad[0] === 'A'
// })
// console.log(netice)


//----------------------------------------------------------------------------------------------------------------


// 7. Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
// let numbers=[1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]

// let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]
// const countEvensAndOdds = (numbers) => {
//     let evens = 0;
//     let odds = 0;
//     numbers.forEach((eded) => {
//         eded % 2 === 0 ? evens++ : odds++
//     })
//     return (`evens: ${evens}, odds: ${odds}` )
// }
// console.log(countEvensAndOdds(numbers))


//----------------------------------------------------------------------------------------------------------------


// 8. Bir funksiya yaradin. Ona massiv verim o massivdeki butun elementlerin ikiqatina cevrilmis massivi geri qaytarsin. (map ile yazin)
// makeDouble([1,4,7,8] )  // [2,8,14,16]

// const makeDouble = (arr) => {
//     const netice = arr.map((eded) =>{
//         return eded * 2
//     })
//     return netice
// }
// console.log(makeDouble([1,2,3,4]))