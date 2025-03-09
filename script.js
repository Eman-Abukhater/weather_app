const apiKey = "d1f8a252d73a6bc66c11442115a24dd0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + ` &appid=${apiKey}`);
  
        var data = await response.json();
        console.log(data);

        document.querySelector('.humidity').innerText = data.main.humidity + "%";
        document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.wind').innerText = data.wind.speed + "km/h";


}

searchButton.addEventListener('click', function () {
    checkWeather(searchInput.value);
});



