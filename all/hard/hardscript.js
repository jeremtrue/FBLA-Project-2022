import { HARDWORDS } from "./HARDWORDS.js";
//
const NUMBER_OF_GUESSES = 5;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = HARDWORDS[Math.floor(Math.random() * HARDWORDS.length)];
let LETTERCOUNT = 7;
let finalscore = 0;
let addpoints = 0;
let pointrow = 0;

console.log(rightGuessString);

function initBoard() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < LETTERCOUNT; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
    if (elem.textContent === letter) {
      let oldColor = elem.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }

      if (oldColor === "#FF6600" && color !== "green") {
        return;
      }

      elem.style.backgroundColor = color;
      break;
    }
  }
}

function deleteLetter() {
  let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining];
  let box = row.children[nextLetter - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  currentGuess.pop();
  nextLetter -= 1;
}

function checkGuess() {
  let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining];
  let guessString = "";
  let rightGuess = Array.from(rightGuessString);

  for (const val of currentGuess) {
    guessString += val;
  }

  if (guessString.length != LETTERCOUNT) {
    toastr.error("Not enough letters!");
    return;
  }

  if (!HARDWORDS.includes(guessString)) {
    toastr.error("Word not in list!");
    return;
  }

  var letterColor = ["gray", "gray", "gray", "gray", "gray", "gray", "gray"];

  for (let i = 0; i < LETTERCOUNT; i++) {
    if (rightGuess[i] == currentGuess[i]) {
      finalscore += 25;
      console.log(finalscore);
      letterColor[i] = "green";
      rightGuess[i] = "#";
    }
  }

  for (let i = 0; i < LETTERCOUNT; i++) {
    if (letterColor[i] == "green") continue;

    for (let j = 0; j < LETTERCOUNT; j++) {
      if (rightGuess[j] == currentGuess[i]) {
        finalscore += 10;
        console.log(finalscore);
        letterColor[i] = "#FF6600";
        rightGuess[j] = "#";
      }
    }
  }

  for (let i = 0; i < LETTERCOUNT; i++) {
    let box = row.children[i];
    let delay = 250 * i;
    setTimeout(() => {
      box.style.backgroundColor = letterColor[i];
      shadeKeyBoard(guessString.charAt(i) + "", letterColor[i]);
    }, delay);
  }

  if (guessString === rightGuessString) {
     toastr.options = {
      "timeOut": "null",
     }
    toastr.success("You guessed right! Game over!");
     pointrow = guessesRemaining;
      console.log("guessesremaining", guessesRemaining);
      console.log("pointrow", pointrow);
    guessesRemaining = 0;
 finalscore += 200;
        console.log("finalscore", finalscore);
        pointrow -= 1;
        addpoints += (pointrow * 200);
        finalscore = finalscore + addpoints;
        const name = prompt('Enter your name');
        console.log(name);
const playerName = name;
const playerScore = finalscore;

//Get the current leaderboard data from localStorage
const leaderboardData = localStorage.getItem('leaderboard');

//Parse the leaderboard data into an array
const leaderboard = leaderboardData ? JSON.parse(leaderboardData) : [];

// Push the new entry to the leaderboard array
leaderboard.push({ name: playerName, score: playerScore });

// Sort the leaderboard array in descending order based on the score
leaderboard.sort((a, b) => b.score - a.score);

//Save the sorted leaderboard array back to localStorage
localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;

    if (guessesRemaining === 0) {
      toastr.error("You've run out of guesses! Game over!");
      toastr.info(`The right word was: "${rightGuessString}"`);
    }
  }
}

function insertLetter(pressedKey) {
  if (nextLetter === LETTERCOUNT) {
    return;
  }
  pressedKey = pressedKey.toLowerCase();

  let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining];
  let box = row.children[nextLetter];
  box.textContent = pressedKey;
  box.classList.add("filled-box");
  currentGuess.push(pressedKey);
  nextLetter += 1;
}

document.addEventListener("keyup", (e) => {
  if (guessesRemaining === 0) {
    return;
  }

  let pressedKey = String(e.key);
  if (pressedKey === "Backspace" && nextLetter !== 0) {
    deleteLetter();
    return;
  }

  if (pressedKey === "Enter") {
    checkGuess();
    return;
  }

  let found = pressedKey.match(/[a-z]/gi);
  if (!found || found.length > 1) {
    return;
  } else {
    insertLetter(pressedKey);
  }
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  const target = e.target;

  if (!target.classList.contains("keyboard-button")) {
    return;
  }
  let key = target.textContent;

  if (key === "Del") {
    key = "Backspace";
  }

  document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    console.log("ESC");
    console.log(finalscore);
    window.location.href = '../../index.html';
  }
});
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13 && guessesRemaining == 0) {
    location.reload();
  }
}); 

localStorage.setItem("easyscore", finalscore)
console.log(finalscore);
initBoard();