/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 *  The first word within the output should be capitalized only if the original word was capitalized.
 */
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// my veriosn
// function toCamelCase(str) {
//   let reg = /(-|_)[a-zA-Z]/g
//   return str.replace(reg,function(word) {
//     return word.substring(1,2).toUpperCase()
//   })
  
// }
// console.log(toCamelCase("The_Stealth_Warrior"));

//  good version
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => {
    console.log(_)
    console.log(c)
    return c.toUpperCase()
  });
}
console.log(toCamelCase("The_Stealth_Warrior"));

// Summary in "../APIs/String/1.replace.js"