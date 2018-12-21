var a = 100
console.log(delete a);
console.log(a)

let b = 200
console.log(delete b);
console.log(b)

const c = 300
console.log(delete c);   // 只有这个是true
console.log(c);

let d = { name: "snk", age: 18 }
console.log(delete d.name);
console.log(d);


function abc() {
  console.log('abd')
}
console.log(delete abc);
console.log(abc)

var def = function () {
  console.log('def')
}
console.log(delete def);
console.log(def);

// 只能删除某个对象的属性，不能删除函数、变量（let const var 声明的）