const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscores);
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
  console.log("clicked th");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };
  console.log(score);
};
