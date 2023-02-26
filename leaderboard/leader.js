//creating player variables
let player1score = 0 ;
let player2score = 0 ;
let player3score = 0 ;
let player4score = 0 ;
let player5score = 0 ;

//creating cookies to store leaderboard information.

localStorage.setItem("player1score", "0");
localStorage.setItem("player2score", "0");
localStorage.setItem("player3score", "0");
localStorage.setItem("player4score", "0");
localStorage.setItem("player5score", "0");

//loggging player scores for debuging purposes.
document.getElementById("player1").innerHTML = localStorage.getItem("player1score");


//trying to start a basic submit score script




//https://www.w3schools.com/js/js_output.asp
//https://www.w3schools.com/html/html_forms.asp
//