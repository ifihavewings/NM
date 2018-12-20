// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// my version
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function createPhoneNumber(arr) {
    return arr.join('').replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");
}

// short version but not good
function createPhoneNumber(n) {
    return "(012) 345-6789".replace(/\d/g, d => n[d])
}
console.log(createPhoneNumber([2,3,4,5,6,7,8,9,3,2]))