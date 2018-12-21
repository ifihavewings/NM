// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// my veision 
function pigIt(str) {
    return str.replace(/\b([a-z])([a-z]{0,})\b/gi,"$2$1ay")
}

// good version 
function pigIt(str){
    //Code here
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
console.log(pigIt('Hello world !'));
console.log(pigIt('O tempora o mores'));


// summary : 正则不精简
