 let random = Math.floor(Math.random() * 100) + 1;

    function checkGuess() {
      let guess = document.getElementById("guessInput").value;
      let message = document.getElementById("message");

      guess = Number(guess);

      if (guess === random) {
        message.innerHTML = "🎉 Correct! The number was " + random;
      }
      else if (guess > random) {
        message.innerHTML = "📈 Too High! Try smaller number.";
      }
      else {
        message.innerHTML = "📉 Too Low! Try bigger number.";
      }
    }