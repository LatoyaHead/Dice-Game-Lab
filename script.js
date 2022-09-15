const button1 = document.getElementById('play-game')
const button2 = document.getElementById('reset')
const scoreContainer = document.getElementById('scoreContainer')

button1.addEventListener('click', playGame)
button2.addEventListener('click', resetGame)

displayScore()

function rollDice(){
    const computer = Math.floor(Math.random() * 6) + 1; //or use Math.ceil starts at 0 so no need for the +1
    const player = Math.floor(Math.random() * 6) + 1;
    const winner = player > computer ? "Player Wins" : "Computer Wins"
    return [computer, player, winner]
}
console.log(rollDice());

function displayScore(values){ //or const displayScore = () => {}
 const div1 = document.createElement('div')//created a div
 div1.textContent = `Computer Score ${values[0]}`
 const div2 = document.createElement('div')
 div2.textContent = `Player Score ${values[1]}`
 const div3 = document.createElement('div')
 div3.textContent = `Winner ${values[2]}`
 const children = [div1, div2, div3]
 children.forEach(element => scoreContainer.appendChild(element))
}

function resetGame(){
  const reset = scoreContainer.querySelectorAll('div')
  const list = Array.from(reset) //turning the nodelist into an array for javascript so we can use the array functions like map(), filter, reduce...etc
  list.map(list => list.remove())
}
function playGame(){
  const values = rollDice() //return 3 vaules
  displayScore(values)  // doesnt return
}

//================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)

        // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
       

      // ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      // Create a new a div displaying:
      // Computer Score: , Player Score:  & the Winner:
      // so there is a running record of game data.
      // Append the new div to the parent div on the HTML.
   

      // Create a Reset Function (resetGame)
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)

      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button

      // ===== Now let's host this game in GITHUB PAGES and style it 