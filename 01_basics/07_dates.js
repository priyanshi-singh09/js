// Dates

let myDate = new Date()
// console.log(myDate.toString()); // date and time
// console.log(myDate.toDateString()); // date
// console.log(myDate.toLocaleString()); // mm/dd/yyyy  time
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // day month date year

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // value -> mili sec
// console.log(Math.floor(Date.now()/1000)); // converted mili sec to sec not decimal

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // get month
console.log(newDate.getDay()); // get date

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})