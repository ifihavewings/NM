/**
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
array_diff([1,2,2,2,3],[2]) == [1,3]
 *  */


// my version the good version
function array_diff(a, b) {
  return a.filter(item=>{return !b.includes(item)})
}

let aa = [1,2,3,4]
let bb = [2]
array_diff(aa,bb)