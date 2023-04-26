//Weather API SheCodes https://www.shecodes.io/learn/apis/weather

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "bdbfbt8caf94d99e3db801476bbo7302";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key=bdbfbt8caf94d99e3db801476bbo7302&units=metric";

axios.get(apiUrl).then(displayTemperature);
