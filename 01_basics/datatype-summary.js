//primitive

// 7 types : string, number, boolean, null, undefined,symbol, BigInt
  const score = 100 // int
  const scoreValue = 100.3 // float
  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;
   //  id and another id have different value
const id = symbol('123')
const anotherId = symbol('123')

 // verify
 console.log(id === anotherId); //false

 // for big number
 const bigNumber = 34756752987988678n

 // Reference(Non primitive)

 //Array, object, function
 //Array
const heros = ["a", "b", "c"]
//Object
let myObj ={
    name: "priyanshi",
    age: 22,
}
//function
const myFunction = function(){
    console.log("hello world");

}
//what type of data
console.log(typeof bigNumber);
// see in interview question will be ask on return type and data type so  see that 







// # memory  stack memory(primitive)-> we get copy of variable that we declare, heap memory(non-primitive)-> we get refreance of original value if we change it changes in origital value
let myName = "priyanshi"

let anotherName = myName
anotherName = "princu"

console.log(anothername); // priyanshi // princu
console.log(myName); // priyanshi


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne

userTwo.email = "ps3109809@gmail.com"

console.log(userOne.email); //ps3109808@gmailcom
console.log(userTwo.email);  //ps3109808@gmailcom






