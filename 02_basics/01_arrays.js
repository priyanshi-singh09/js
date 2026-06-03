// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add starting
// myArr.shift() // remove element

// console.log(myArr.includes(9)); // is 9 in the array?
// console.log(myArr.indexOf(3)); // give index

// const newArr = myArr.join() // join the string and converted to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);// a original array

const myn1 = myArr.slice(1, 3) //

console.log(myn1); // same array
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // the portion is gone
console.log("C ", myArr);
console.log(myn2);