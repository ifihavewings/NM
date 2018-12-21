/***
 * 1和2是RegExp的函数
 * 其他是字符串的函数
 */

// 1. test string是否包含有匹配结果，返回布尔值
let reg = /a/gi
console.log(reg.test('cap')); // true
console.log(reg.test('cup')); // false

/* 
如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。

但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
=================================================================================================
重要事项：如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。

提示：请注意，无论 RegExpObject 是否是全局模式，exec() 都会把完整的细节添加到它返回的数组中。这就是 exec() 与 String.match() 的不同之处，后者在全局模式下返回的信息要少得多。因此我们可以这么说，在循环中反复地调用 exec() 方法是唯一一种获得全局模式的完整模式匹配信息的方法。
=================================================================================================
 */


// 2.1 exec  两种情况 ：a匹配到了，返回一个数组；b没有匹配到，返回null
// a 匹配到了，返回一个数组arr
// arr[0]是匹配到的字符串,arr[1]-arr[i]是正则表达式的分组匹配到的子字符串，index是arr[0]字符串在整个字符串的索引，input 是整个字符串
let str = 'banana grapes apple pear peach'
console.log(/(a)(n)a/g.exec(str))
/* [ 'ana',
'a',
'n',
index: 1,
input: 'banana grapes apple pear peach' ] */
console.log('=======================================================');
console.log(/(a)(n)a/g.exec(str)['index']);  //1
console.log(/(a)(n)a/g.exec(str)['input']);  //banana grapes apple pear peach
console.log(/(a)(n)a/g.exec(str)[0]);   //?  //ana







// 2.2 分组对exec返回值的影响
console.log(/(a)(n)(a)/g.exec(str))
/* [ 'ana',
  'a',
  'n',
  'a',
  index: 1,
  input: 'banana grapes apple pear peach' ] */

var x = "a.xxx.com b.xxx.com c.xxx.com";
var re = /\s?(.*?).xxx.com/g;
// let tempR = re.exec(x)
// console.log('--------------------------------------');
// console.log(re.lastIndex);  // 9
// console.log(re.source);  // \s?(.*?).xxx.com
// console.log(re.ignoreCase);  // false
// console.log(re.multiline);  // false
// console.log(re.global);  // true
console.log('********************')
