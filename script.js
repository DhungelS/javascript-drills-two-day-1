function jediName (firstName, lastName){
  const firstHalf = firstName.slice(0,2)
  const secondHalf = lastName.slice(0,3)
  console.log(firstHalf)
  console.log(secondHalf)
  console.log(secondHalf + firstHalf)
}

jediName("Saugat", "Dhungel")