// my version
String.prototype.toJadenCase = function () {
  return this.split(" ").map(item=> {return item.substring(0,1).toUpperCase() + item.substring(1)}).join(" ")
};


// good version 
String.prototype.toJadenCase = function () {
  return this.replace(/(^| )(\w)/g,  s=> { return s.toUpperCase(); });
};
let str = "hello Jon, I am your fan"
str.toJadenCase()


//  Summary
// 字符串操作，尽量用正则或String的方法







