import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const refs = {
  inputDateEl: document.querySelector('#datetime-picker'),
  buttonStartEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
refs.buttonStartEl.disabled = true;

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else if (selectedDates[0] > new Date()) {
      refs.buttonStartEl.disabled = false;
    }

    refs.buttonStartEl.addEventListener('click', () => {
      timerId = setInterval(() => {
        const time = selectedDates[0] - new Date();

        if (time < 1000) {
          clearInterval(timerId);
        }

        const resultTime = convertMs(time);
        updateTimer(resultTime);
      }, 1000);
    });
  },
};

function updateTimer({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = addLeadingZero(days);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.secondsEl.textContent = addLeadingZero(seconds);
}

const fp = flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// function convertMs
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
