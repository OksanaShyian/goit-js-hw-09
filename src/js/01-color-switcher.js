const bodyEl = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timeId = null;

startButton.addEventListener('click', onButtonStart);
stopButton.addEventListener('click', onButtonStop);

function onButtonStart() {
  timerId = setInterval(
    () => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    },
    1000,
    startButton.setAttribute('disabled', true)
  );
}
function onButtonStop() {
  clearInterval(timerId);
  startButton.removeAttribute('disabled', true);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
