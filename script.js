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


function decode (word){
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
console.log(decode("droop"))
