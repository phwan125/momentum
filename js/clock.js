const clock = document.querySelector("h2#clock");

function makeClock() {
  const day = new Date();
  // const year = String(day.getFullYear());
  // const month = String(day.getMonth() + 1);
  // const date = String(day.getDate()).padStart(2, "0");
  const hours = String(day.getHours()).padStart(2, "0");
  const minutes = String(day.getMinutes()).padStart(2, "0");
  const seconds = String(day.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

makeClock();
setInterval(makeClock, 1000);
