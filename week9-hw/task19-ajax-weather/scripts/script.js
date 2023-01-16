const ICON_BASE_URL = "http://openweathermap.org/img/w/";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?id=";
const WEATHER_API_KEY = "a91510521b17929808a226f0569f3445";
const CITY_ID = 703448;

function showWeather(cityId) {
  fetch(generateWeatherLink(cityId))
    .then((response) => response.json())
    .then((data) => getWeather(data));
}

function getWeather(data) {
  let celcius = Math.round(parseFloat(data.main.temp) - 273.15);

  document.querySelector(".city").innerHTML = `Weather in ${data.name}`;
  document.querySelector(".temperature").innerHTML = `${celcius} &deg;C`;
  document.querySelector(
    ".pressure"
  ).innerHTML = `Pressure: ${data.main.pressure} hPa`;
  document.querySelector(".icon").src = generateIconLink(data.weather[0].icon);
  document.querySelector(".description").innerHTML =
    data.weather[0].description;
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${data.main.humidity} %`;
  document.querySelector(
    ".speed"
  ).innerHTML = `Wind speed: ${data.wind.speed} km/h`;
  document.querySelector(
    ".deg"
  ).innerHTML = `Wind direction: ${data.wind.deg}&deg;`;
}

function generateIconLink(code) {
  return `${ICON_BASE_URL}${code}.png`;
}

function generateWeatherLink(cityId) {
  return `${WEATHER_API_URL}${cityId}&appid=${WEATHER_API_KEY}`;
}

window.onload = function () {
  showWeather(CITY_ID);
};
