class List {
  constructor(arr = []) {
    this.listSize = arr.length;
    this.pos = 0;
    this.dataStore = arr;
  }
  append(item) {
    this.dataStore[listSize++] = item;
  }
  find(item) {
    let index = this.dataStore.indexOf(item);
    return index>-1 ? index : -1
  }
  remove(item) {
    let itemIndex = this.find(item);
    if(itemIndex > -1) {
       this.dataStore.splice(itemIndex,1)
       this.listSize--
       return true
    }
    return false
  }
  splice(...args) {
    return Array.prototype.splice.apply(this.dataStore,args)
  }
  clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }
  contains(item) {
    return this.dataStore.indexOf(item) > -1 ? true  : false
  }





}

let list = new List([1,2,3,4,5])
console.log(list.find(4))
console.log(list.remove(5))
console.log(list)

let list2 = new List(['pp',1,2,'k'])
console.log(list2.listSize)

list2.splice(0,0,'haha','sk')
console.log(list2)

console.log(list2.contains('sk'));
