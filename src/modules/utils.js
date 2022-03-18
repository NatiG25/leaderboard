const user = document.querySelector('.user');
const score = document.querySelector('.score');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aJpln9nj3naXwqc1haiG/scores/';

const sendAPI = async () => {
    const settings = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: user.value,
        score: score.value,
      }),
  
    };
  
    user.value = '';
    score.value = '';
  
    try {
      const fetchResponse = await fetch(url, settings);
      const response = await fetchResponse.json();
      return response;
    } catch (e) {
      return e;
    }
    }

const getAPI = async () => {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
  };

export { getAPI, sendAPI };