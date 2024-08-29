const apiKey = 'your_api_key_here';

function fetchWeather() {
    const location = document.getElementById('locationInput').value;

    if (location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => alert('Error fetching weather data. Please try again.'));
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');

    if (data.cod === 200) {
        const weatherInfo = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        weatherDataDiv.innerHTML = weatherInfo;
    } else {
        weatherDataDiv.innerHTML = `<p>${data.message}</p>`;
    }
}
