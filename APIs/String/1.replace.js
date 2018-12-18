// 语法： stringObj.replace(regexp/substr,replacement)
// 不改变原来的字符串

// 1.两个参数都是字符串 , 只替换第一个匹配到的字符串，多个字符串替换要用正则
let str1 = 'i love to love'
let str2 = str1.replace('o','*')
console.log(str2)   // i l*ve to love

// 2.第一个参数是正则，第二个参数是字符串
let str3 = str1.replace(/o/g,'&')  //i l&ve t& l&ve
console.log(str3)

// 3.