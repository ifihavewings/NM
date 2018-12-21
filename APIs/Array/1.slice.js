/**
 * slice(start[,end])，从已有的数组中返回选定的元素
 * 不改变原来的数组，
 **/

// 1.返回从数组中序号[start,end)的元素,包含起始位，不包含开始位
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1.slice(2, 5))// [3,4,5]

// 2.如果没有end，返回从start截取到数组末尾
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]/*  */
console.log(arr1.slice(3))

// 3.不传参数,返回一个完整的数组
console.log(arr1.slice())  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1 === arr1.slice())  //false

// 4.star >end 的情况，返回空数组
console.log(arr1.slice(6, 5))  // []

// 5.end 为负数，正、负数排序如下，
//         -9 -8 -7 -6 -5 -4 -3 -2  -1  
//          0  1  2  3  4  5  6  7  8
console.log(arr1.slice(-8))
console.log(arr1.slice(3, -1))  // [4, 5, 6, 7, 8]

// 6. start end 均为负数

console.log(arr1.slice(-7,-3)) //[3, 4, 5, 6]



