const countdown = document.querySelector(".countdown");
const elDays = document.querySelector(".days");
const elHours = document.querySelector(".hours");
const elMinutes = document.querySelector(".minutes");
const elSeconds = document.querySelector(".seconds");

const interval = setInterval(() => {
  const deadline = new Date(2024, 5, 11, 14, 30, 0);

  const current = new Date();

  const diff = deadline - current;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  const seconds = Math.floor((diff / 1000) % 60) + "";

  elDays.innerHTML = `${days.length === 1 ? `0${days}` : days}`;
  elHours.innerHTML = `${hours.length === 1 ? `0${hours}` : hours}`;
  elMinutes.innerHTML = `${minutes.length === 1 ? `0${minutes}` : minutes}`;
  elSeconds.innerHTML = `${seconds.length === 1 ? `0${seconds}` : seconds}`;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Just married!!!</h1>";
  }
}, 1000);
