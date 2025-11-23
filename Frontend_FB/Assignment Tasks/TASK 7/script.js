const cityInput = document.getElementById("city_name");
const checkBtn = document.getElementById("check_weather");
const displayDiv = document.getElementById("weather_result");

const myApiKey = "c75b5ba04a5bb3715c4f926b3094dde3"; // replace with your OpenWeatherMap API key

async function fetchWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        displayDiv.innerHTML = "<p class='error'>Please enter a city name!</p>";
        return;
    }

    displayDiv.textContent = "Loading weather...";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${myApiKey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            displayDiv.innerHTML = "<p class='error'>City not found!</p>";
            return;
        }

        displayDiv.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        `;
    } catch {
        displayDiv.innerHTML = "<p class='error'>Error fetching data!</p>";
    }
}

checkBtn.addEventListener("click", fetchWeather);
