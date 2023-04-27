function formatYear() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];
  return `${day}. ${month} ${year}`;
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

//Weather API SheCodes https://www.shecodes.io/learn/apis/weather
//Temperature, description, date/time, icon changing when city is changed

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let weekDayElement = document.querySelector("#week-day");
  let dateYearElement = document.querySelector("#date-year");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  weekDayElement.innerHTML = formatDate(response.data.time * 1000);
  dateYearElement.innerHTML = formatYear(response.data);
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}

//Search-Engine

function searchCity(city) {
  let apiKey = "bdbfbt8caf94d99e3db801476bbo7302";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric";

  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-text-input").value;
  searchCity(cityInputElement);
  console.log(cityInputElement);
}

searchCity("London");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
