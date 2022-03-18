import './style.css';
import { displayScore, scoreList } from './modules/dom.js';
import { sendAPI, getAPI } from './modules/utils.js';

const submitBtn = document.querySelector('.submitBtn');
const refreshBtn = document.querySelector('.refreshBtn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendAPI();
});


refreshBtn.addEventListener('click', async () => {
  const data = await getAPI();
  scoreList.innerHTML = '';
  displayScore(data.result);
});