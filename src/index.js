import './style.css';

const name = document.querySelector('.name');
const score = document.querySelector('.score');
const submitBtn = document.querySelector('.submitBtn');
const refreshBtn = document.querySelector('.refreshBtn');
const scoreList = document.querySelector('.scoreList');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aJpln9nj3naXwqc1haiG/scores/';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),

  })
    .then((response) => response.json())
    .then((json) => json).catch((error) => error);
  name.value = '';
  score.value = '';
});

const getAPI = async () => {
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson;
};

const displayScore = (array) => {
  array.forEach((item) => {
    scoreList.innerHTML += `<li>
            <ul>
            <li>${item.user}</li>
            <li>${item.score}</li>
            </ul>
            </li>`;
  });
};

refreshBtn.addEventListener('click', async () => {
  const data = await getAPI();
  scoreList.innerHTML = '';
  displayScore(data.result);
});