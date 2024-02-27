document.addEventListener('DOMContentLoaded', function () {
    const introForm = document.getElementById('introForm');
    const startButton = document.getElementById('startButton');
  
    if (introForm) {
      introForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        startGame();
      });
    }
  
    if (startButton) {
      startButton.addEventListener('click', startGame);
    }
  
    function startGame() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
  
      const playerInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        attempts: 0
      };
  
      // Store playerInfo in localStorage
      localStorage.setItem('playerInfo', JSON.stringify(playerInfo));
  
      // Redirect to the memory game page
      window.location.href = 'memorygame.html';
    }
  
    const memoryGamePage = window.location.pathname.includes('memorygame.html');
    if (memoryGamePage) {
      // Example: Call updateAttempts function when the game is complete
      const totalAttempts = 10; // Replace with the actual total attempts made by the player
      updateAttempts(totalAttempts);
    }
  });
  
  function updateAttempts(attempts) {
    const playerInfo = JSON.parse(localStorage.getItem('playerInfo'));
    playerInfo.attempts = attempts;
    localStorage.setItem('playerInfo', JSON.stringify(playerInfo));
  
    // Redirect to the final page
    window.location.href = 'finalpage.html';
  }
  
  