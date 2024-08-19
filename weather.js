
// function getWeather() {

//     // const city = 'Lahore';
//     const city = document.getElementById('city').value;
//     const apiKey = '78c1c5420707c81092c314cd239c293b'; 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Weather data not found');
//             }
//             return response.json(); 
//         })
//         .then(data => {

//             const temp = data.main.temp;
//             const description = data.weather[0].description;
//             const cityName = data.name;

//             console.log(`Temperature in ${cityName}: ${temp}°C, ${description}`);
//         })
//         .catch(error => {

//             console.error('Error:', error.message);
//         });
// }

// getWeather();




function getWeather() {
    // const city = document.getElementById('city').value;
    const city = document.getElementById('city').value;
    const apiKey = '78c1c5420707c81092c314cd239c293b'; // your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(url)
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').textContent = 'Could not retrieve weather data. Please try again.';
        });
}

function fetchWeather(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.textContent = `Temperature in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
}
