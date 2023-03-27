
//creating cookies to store leaderboard information.

localStorage.setItem("player1score", "");
localStorage.setItem("player2score", "");
localStorage.setItem("player3score", "");
localStorage.setItem("player4score", "");
localStorage.setItem("player5score", "");

//creating player variables
let p1score = localStorage.getItem("player1score") ;
//let player2score = 0 ;
//let player3score = 0 ;
//let player4score = 0 ;
//let player5score = 0 ;

//loggging player scores for debuging purposes.
//document.getElementById("player1").innerHTML = localStorage.getItem("player1score");


//trying to start a basic submit score script




//https://www.w3schools.com/js/js_output.asp
//https://www.w3schools.com/html/html_forms.asp


document.getElementById("leaderboard").innerHTML += "Player 1:" + p1score ;
/*document.getElementById("leaderboard").innerHTML += 'Player 1:';
document.getElementById("leaderboard").innerHTML += 'Player 1:';
document.getElementById("leaderboard").innerHTML += 'Player 1:';
*/
