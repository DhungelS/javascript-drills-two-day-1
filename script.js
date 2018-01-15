/*function jediName (firstName, lastName){
  const firstHalf = firstName.slice(0,2)
  const secondHalf = lastName.slice(0,3)
  console.log(firstHalf)
  console.log(secondHalf)
  console.log(secondHalf + firstHalf)
}

jediName("Saugat", "Dhungel")*/

function beyond(num) {
    if (num === Infinity) {
        console.log("And beyond");
    } else if (num !== Infinity) {
        console.log("To infinity");
    } else if (num < 0) {
        console.log("To negative infinity");
    } else if (num === 0) {
        console.log("Staying home");
    }
}

beyond(Infinity);
beyond(17);
beyond(-19);
beyond(0);