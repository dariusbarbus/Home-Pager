// FILE: script.js
// PROJECT: Home Pager
// PROGRAMMER: Dario Simpson
// FIRST VERSION: 15-3-2024

//Do not touch anything else in this file unless you know what you are doing


//
// FUNCTION    : searchEngine
// DESCRIPTION : Redirects the user to the chosen search engine with the corresponding query.
// PARAMETERS  :
//      string query : The search query entered by the user.
// RETURNS     : None
//
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            const searchQuery = searchInput.value;
            if (searchQuery.trim() !== '') {
                searchEngine(searchQuery);
            }
        }
    });

    // HERE YOU CAN CHANGE THE SEARCH ENGINE
    function searchEngine(query) {
        const url = `https://www.ecosia.org/search?q=${query}`;
        window.location.href = url;
    }

});

https://api.open-meteo.com/v1/forecast?latitude=43.4254&longitude=-80.5112&current=temperature_2m,is_day,precipitation,rain,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m

//
// FUNCTION    : getWeatherFromUrl
// DESCRIPTION : Fetches weather data from the Open-Meteo API using a predefined URL.
//               Displays the current temperature, cloud cover percentage, and precipitation amount.
// PARAMETERS  : None
// RETURNS     : None
//
function getWeatherFromUrl() {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=43.4254&longitude=-80.5112&current=temperature_2m,is_day,precipitation,rain,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m';

    // Fetch weather data from Open-Meteo API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data from Open-Meteo');
            }
            return response.json();
        })
        .then(openMeteoData => {
            const temperature = openMeteoData.current.temperature_2m; // Current temperature
            const cloudCover = openMeteoData.current.cloud_cover; // Cloud cover
            const precipitation = openMeteoData.current.precipitation; // Precipitation amount
            const isDay = openMeteoData.current.is_day; // is day or night
            const rainMeter = openMeteoData.current.rain; // rain amount in mm
            const snowMeter = openMeteoData.current.snowfall; // snow amount in cm
            const windSpeed = openMeteoData.current.wind_speed_10m // wind speed

            if(isDay){
                time = "Day Time";
                if(snowMeter > 0){
                    document.getElementById('weather-icon').innerHTML = `<img src="assets/snowy-day.svg" alt="Snowy Day Icon" style="height: auto; width: 100px; margin-bottom: 15px">`;
                }else if(rainMeter > 0){
                    // INSERT ICON FOR RAINY DAY
                }else if(cloudCover >= 25){
                    document.getElementById('weather-icon').innerHTML = `<img src="assets/cloudy-day.svg" alt="Snowy Day Icon" style="height: auto; width: 100px; margin-bottom: 15px">`;
                }else{
                    document.getElementById('weather-icon').innerHTML = `<img src="assets/clear-day.svg" alt="Clear Day Icon" style="height: auto; width: 100px; margin-bottom: 15px">`;
                }
            }else {
                time = "Night time";
            }

            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<div>Temperature: ${temperature}°C</div><div>Time: ${time}</div>`;
            // weatherInfo.innerHTML = `<div>Temperature: ${temperature}°C</div><div>Precipitation: ${precipitation}mm</div><div>Cloud Cover: ${cloudCover}%</div><div>Time: ${time}%</div>`;
            // weatherInfo.innerHTML = `<div>Temperature: ${temperature}°C</div>
            //                          <div>Precipitation: ${precipitation}mm</div>
            //                          <div>Cloud Cover: ${cloudCover}%</div>
            //                          <div>Time: ${time}</div>
            //                          <div>Rain: ${rainMetter}</div>
            //                          <div>Snow: ${snowMetter}</div>
            //                          <div>Wind Speed: ${windSpeed}</div>`;
            //
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

//run when page is loaded
window.onload = getWeatherFromUrl;
