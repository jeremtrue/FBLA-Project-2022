const form = document.querySelector('form');
      const nameInput = document.getElementById('name');
      const scoreInput = document.getElementById('score');
      const leaderboardTable = document.getElementById('leaderboard');

      // get existing leaderboard from localStorage, or create a new empty array
      let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

      // function to update the leaderboard table
      function updateLeaderboard() {
        // sort the leaderboard by score, in descending order
        leaderboard.sort((a, b) => b.score - a.score);

        // clear the existing table rows
        leaderboardTable.innerHTML = '';

        // add a row for each player in the leaderboard
        leaderboard.forEach((player, index) => {
          const row = document.createElement('tr');
          const rankCell = document.createElement('td');
          rankCell.textContent = index + 1;
          row.appendChild(rankCell);
          const nameCell = document.createElement('td');
          nameCell.textContent = player.name;
          row.appendChild(nameCell);
          const scoreCell = document.createElement('td');
          scoreCell.textContent = player.score;
          row.appendChild(scoreCell);
          leaderboardTable.appendChild(row);
        });
      }

      // function to handle form submission
      function handleSubmit(event) {
        event.preventDefault();

        const playerName = nameInput.value.trim();
        const playerScore = parseInt(scoreInput.value.trim());

        if (playerName && playerScore) {
          // add the player to the leaderboard
          leaderboard.push({ name: playerName, score: playerScore });

          // save the updated leaderboard to localStorage
          localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

          // update the leaderboard table
          updateLeaderboard();

          // clear the form inputs
          nameInput.value = '';
          scoreInput.value = '';
        }
      }

      // update the leaderboard table on page load
      updateLeaderboard();

      // add event listener for form submission
      form.addEventListener('submit', handleSubmit);
      document.addEventListener("keydown", function(event) {
        if(event.keyCode === 27){
           //Esc key was pressed
           console.log("ESC");
           window.location.href = "../../index.html";
       } 
      });