const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  const formatter = (n) => n.toString().padStart(2, 0);

  return (seconds) => {
    const timer = setInterval(() => {
      const hh = formatter(Math.floor(seconds / 3600));
      const mm = formatter(Math.floor(seconds / 60 - hh * 60));
      const ss = formatter(seconds - mm * 60 - hh * 3600);
      timerEl.textContent = `${hh}:${mm}:${ss}`;
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
      }
    }, 1000);
    return timer;
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  inputEl.value = inputEl.value.replace(/\D+/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});



