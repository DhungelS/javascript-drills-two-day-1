/*function jediName (firstName, lastName){
  const firstHalf = firstName.slice(0,2)
  const secondHalf = lastName.slice(0,3)
  console.log(firstHalf)
  console.log(secondHalf)
  console.log(secondHalf + firstHalf)
}

jediName("Saugat", "Dhungel")*/

// function beyond(num) {
//     if (num === Infinity) {
//         console.log("And beyond");
//     }  else if (num === 0) {
//       console.log("Staying home");
//     } else if (num < 0) {
//       console.log("To negative infinity");
//     }
//     else if (num !== Infinity) {
//       console.log("To infinity");
//   }
// }

// beyond(Infinity);
// beyond(17);
// beyond(-19);
// beyond(0);


/*function decode (word){
if(word[0] === "a"){
  console.log(word[1])
}
else if(word[0] === "b"){
  console.log(word[2])
}
else if(word[0] === "c"){
  console.log(word[3])
}
else if(word[0] === "d"){
  console.log(word[4])
}

else {
  console.log(" ")
}
}
console.log(decode("droop"))*/

// function daysInMonth(month) {
//     switch (month) {
//         case "January":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "February":
//             days = 28;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "March":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "April":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "May":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "June":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "July":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "August":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "September":
//             days = 30;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "October":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "November":
//             days = 30;
//             console.log(`${month} has ${days} days.`)
//             break;

//         case "December":
//             days = 31;
//             console.log(`${month} has ${days} days.`)
//             break;
//     }
// }


// daysInMonth("November")

function rockPaperScissors(rps){
const randomNo = Math.floor(Math.random() * 3) + 1;
console.log(`Computers current number is ${randomNo}`)
if(randomNo === rps ){
console.log("It's a tie!")
}
else if(randomNo === 1 && rps === 3){
  console.log("Computer wins!")
}
else if(randomNo === 3 && rps === 1){
  console.log("You win!")
}
else if(randomNo === 1 && rps === 2){
  console.log("You win!")
}
else if(randomNo === 2 && rps === 1){
  console.log("Computer wins!")
}
else if(randomNo === 2 && rps === 3){
  console.log("You win")
}
else if(randomNo === 3 && rps === 2){
  console.log("Computer wins")
}
}

rockPaperScissors(3)