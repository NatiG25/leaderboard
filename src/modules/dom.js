const scoreList = document.querySelector('.scoreList');

const displayScore = (array) => {
  array.forEach((item) => {
    scoreList.innerHTML += `<li> <span class="scoreItem">${item.user}: ${item.score}</span> </li>`;
  });
};

export { displayScore, scoreList };