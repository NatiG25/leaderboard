const scoreList = document.querySelector('.scoreList');

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

export { displayScore, scoreList };