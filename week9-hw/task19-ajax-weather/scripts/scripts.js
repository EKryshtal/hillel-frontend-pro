function showWeather(cityID) {
  const apiKey = "a91510521b17929808a226f0569f3445";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => getWeather(data));
}

function getWeather(data) {
  let celcius = Math.round(parseFloat(data.main.temp) - 273.15);

  document.querySelector(".city").innerHTML = "Weather in "+ data.name;
  document.querySelector(".temperature").innerHTML = celcius + "&deg;" + "C";
  document.querySelector(".pressure").innerHTML =
    "Pressure: " + data.main.pressure + " hPa";
  document.querySelector(".description").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = "Wind speed: " + data.wind.speed + " km/h";
  document.querySelector(".deg").innerHTML = "Wind direction: " + data.wind.deg + "&deg;";
  document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
}

window.onload = function () {
  showWeather(703448);
};
