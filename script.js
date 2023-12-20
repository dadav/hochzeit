const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const deadline = new Date(2024, 5, 11, 14, 30, 0);

  const current = new Date();

  const diff = deadline - current;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  const seconds = Math.floor((diff / 1000) % 60) + "";

  countdown.innerHTML = `
    <div data-content="Tagen">${days.length === 1 ? `0${days}` : days}</div>
    <div data-content="Stunden">${hours.length === 1 ? `0${hours}` : hours
    }</div>
    <div data-content="Minuten">${minutes.length === 1 ? `0${minutes}` : minutes
    }</div>
    <div data-content="Sekunden">${seconds.length === 1 ? `0${seconds}` : seconds
    }</div>
`;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Just married!!!</h1>";
  }
}, 1000);
