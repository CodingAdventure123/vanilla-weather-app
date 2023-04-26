//Weather API SheCodes https://www.shecodes.io/learn/apis/weather

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = "bdbfbt8caf94d99e3db801476bbo7302";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key=bdbfbt8caf94d99e3db801476bbo7302&units=metric";

axios.get(apiUrl).then(displayTemperature);
