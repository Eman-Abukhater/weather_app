const apiKey = "d1f8a252d73a6bc66c11442115a24dd0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + ` &appid=${apiKey}`);
    if (!response.ok) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        return;
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector('.humidity').innerText = data.main.humidity + "%";
        document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.wind').innerText = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";

        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";

        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";


    }



}

searchButton.addEventListener('click', function () {
    checkWeather(searchInput.value);
});



