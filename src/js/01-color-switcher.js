const bodyEl = document.querySelector('body');
const startButtonEl = document.querySelector('button[data-start]');
const stopButtonEl = document.querySelector('button[data-stop]');

let timeId = null;

startButtonEl.addEventListener('click', onButtonStart);
stopButtonEl.addEventListener('click', onButtonStop);

function onButtonStart() {
  timeId = setInterval(
    () => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    },
    1000,
    startButtonEl.setAttribute('disabled', true)
  );
}
function onButtonStop() {
  clearInterval(timeId);
  startButtonEl.removeAttribute('disabled', true);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
