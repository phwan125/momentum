const API_KEY = "026513e9450a3712b5a663678864804d";

function successFunction(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("you live in", latitude, longitude);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      const hum = document.querySelector("#weather span:nth-child(4)");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      hum.innerText = `${data.main.humidity}%`;
    });
}
function errorFunction() {
  console.log("sorry we don't get your location");
}

navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
