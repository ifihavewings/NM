// 语法： stringObj.replace(regexp/substr,replacement)
// 不改变原来的字符串

// 1.两个参数都是字符串 , 只替换第一个匹配到的字符串，多个字符串替换要用正则
let str1 = 'i love to love'
let str2 = str1.replace('o','*')
console.log(str2)   // i l*ve to love

// 2.第一个参数是正则，第二个参数是字符串
let str3 = str1.replace(/o/g,'&')  //i l&ve t& l&ve
console.log(str3)

// 3. replace 如果第二参数是函数，那么该函数还有3-n个参数,参数数量根据正则分组匹配到的字符串子串的次数而定，一个分组就是一个参数

// 这3-n 个参数分别是：
// 第0个： 正则匹配到的字符串，
// 如果需要处理子串，那么下面的参数就特别有用：
// 第1~n-2个： 正则分组匹配到的子串，几个分组，就就几个参数（有正则分组，就有这个参数，没有正则分组，就没有这个参数）
// 第length-2个：正则匹配到的字符串在整个字符串中的索引，
// 第length-1个：调用relpace函数的字符串本身
// 参数的实际情况可以根据 reg = /\b\w+\b/gi  ,reg = /(\b)\w+\b/gi ,reg = /(\b)(\w+)(\b)/gi 去观测
// 如果第一个参数是正则global模式，那么回调函数将会遍历执行，有多少个匹配的字符串，就执行多少次

let str4 = 'when I was young I loved to listen to the radio'
let reg = /\b(\w+)\b/gi
console.log(reg.test('i'));

str4.replace(reg,function(...arg) {
    console.log(arg) 
})


let str5 = 'when they played i sang alone,it made me smile'
let str6 = str5.replace(reg,(word,sub1)=>{
    // 这时候其实word 和 sub1是相等的， 因为整个单词就是一个子串
    // console.log(word === sub1); // true
    return sub1[0].toUpperCase()+ sub1.substring(1)
})
console.log(str6)

// 4. $1-$99 正则表达式各个分组匹配到的文本
let str7 = 'you are not alone'
let reg2 = /(\w)(\w)(\w)/g
str8 = str7.replace(reg2,"$3$2$1")
console.log(str8)