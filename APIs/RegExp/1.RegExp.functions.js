/***
 * 1和2是RegExp的函数
 * 其他是字符串的函数
 */

// 1. test string是否包含有匹配结果，返回布尔值
let reg = /a/gi
console.log(reg.test('cap')); // true
console.log(reg.test('cup')); // false

// 2. exec：对string进行正则处理,并返回匹配结果.array[0]为原字符串,array[i]为匹配在整个被搜索字符串中的位置。