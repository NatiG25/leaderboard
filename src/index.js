import './style.css';

const name = document.querySelector('.name');
const score = document.querySelector('.score');
const submitBtn = document.querySelector('.submitBtn');
const refreshBtn = document.querySelector('.refreshBtn');
const scoreList = document.querySelector('.scoreList');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aJpln9nj3naXwqc1haiG/scores/';

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const settings =  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),

  };

  name.value = '';
  score.value = '';

  try {
      const fetchResponse = await fetch(url, settings);
      const response = await fetchResponse.json();
      return response;
  } catch (e) {
      return e;
  }

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