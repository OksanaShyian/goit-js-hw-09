import Notiflix from 'notiflix';

const formInputEl = document.querySelector('.form');

formInputEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;
    const delays = Number(delay.value) + step.value * i;

    createPromise(position, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  e.currentTarget.reset();
}

// createPromise(position, delayValue)
//   .then(({ position, delayValue }) => {
//     setTimeout(() => {
//       Notify.success(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
//     }, delayValue);
//   })
//   .catch(({ position, delayValue }) => {
//     setTimeout(() => {
//       Notify.failure(`❌ Rejected promise ${position} in ${delayValue}ms`);
//     }, delayValue);
//   });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
