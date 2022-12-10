// // 1. repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!
//     const repeatedSymbolCounter = (str, herf) => {
//         let say = 0;
//         for(let i = 0; i<str.length; i++){
//             if(str[i]=== herf){
//                 say++
//             }
//         }
//          console.log(say)
//     }
//     repeatedSymbolCounter('Azerbaycan', 'a')

// 2. Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)

// ilkHerfiDeyis('alion', "A") // Alion

// function ilkHerfiDeyis(soz, ilkHerf) {
//     return soz.replace(soz[0], ilkHerf)
// }

// console.log(ilkHerfiDeyis('vugar', 's'))

// 3. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)

// function  abbreviatedForm(str) {
//     const index = str.indexOf(' ')
//     return str.slice(0, index) + str.slice(index, index + 2) + '.'
    
// }

// console.log(abbreviatedForm('Vuqar Qurbanov')) 

// 4. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.

// function removeCharacterFromString(soz, silinenHerf){
// BIRINCI YOL
//         return soz.replace(silinenHerf, '')  

// IKINCI YOL
// //     const index = soz.indexOf(silinenHerf)
// //     return soz.slice(0, index) + soz.slice(index + 1, soz.length + 1)
// }
// console.log(removeCharacterFromString('Vuqar', 'q'))

// 5. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

// const disallowedSymbols = '!#%^&*)(,=+'
// const checkGmail = (email) => {
//     let newEmail = email
//     for(let i = 0; i<newEmail.length; i++){
//         if(disallowedSymbols.includes(newEmail[i])){
//             newEmail = newEmail.replaceAll(newEmail[i], '')
//         }
//     }
//     return newEmail;
// }
//  const validateGmail = (email) => {
//     let newEmail = email;
//     console.log(newEmail)
    
//     if(newEmail.endsWith('@gmail.com') && newEmail.length >= 15){
//         return true
//     }
//     return false
//  }
// checkGmail('vuqar.qurbanov2000@gmail.com')
// console.log(validateGmail('vuqar.qurbanov2000@gmail.com'));
