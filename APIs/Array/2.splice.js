/**
 * splice：向/从数组中添加/删除项目，然后返回被删除的项目
 * 肯定要改变原来的数组的
 */

//  1.arr.splice(2,5,'m','k')  从arr中第2项开始，删除5项，并把'm'和'k'从位置2按照顺序添加到数组arr中
 let arr1 = [1,2,3,4,5,6,7,8,9]

 console.log(arr1.splice(2,5,'m','k'))  // [ 3, 4, 5, 6, 7 ]
 console.log(arr1) // [ 1, 2, 'm', 'k', 8, 9 ]

//  如果只有第一个参数，表示从当前位置一直删除到结尾
let arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2.splice(2)) // [ 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr2)  // [ 1, 2 ]


//  如果只有第一个参数，并且为0，删除数组所有的元素
let arr3 = [1,2,3,4,5,6,7,8,9]
console.log(arr3.splice(0)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr3) // []

// 第二个参数传负数，删除0个元素
let arr4 = [1,2,3,4,5,6,7,8,9]
console.log(arr4.splice(0,-2)) // []
console.log(arr4) // [1,2,3,4,5,6,7,8,9]
