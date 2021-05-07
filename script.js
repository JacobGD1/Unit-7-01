document.getElementById('button').addEventListener('click',  randomizer)
// connects guess button to random function
let randomNumber = 0
let userGuess = 0
// Sets random numbers and user guesses to variables
function randomizer () {
  // convert the users number to an integer
  userGuess= document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  // compare users guess to random numbers
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'you win!'
  }
}
