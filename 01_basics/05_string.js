// initialise

const name = "hitesh"
const repoCount = 50

// console.log( name + repoCount + "Value"); // hitesh50 value
//backticks string interpolation -> placeholders directly inject variables
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hites-h') // obj
// there are many methods/ function to access the element 
// console.log(gameName[0]); //h
// console.log(gameName.__proto__);  //we get an object


// console.log(gameName.length) // 8
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,4)
console.log(newString);


