// Replace with Our Blynk API token Id
const BLYNK_TOKEN = 'YmB9kZNUSawoHzqcH_iNht18idGLpZbJ';
const SERVER_ADDRESS = 'blr1.blynk.cloud';

// Function to fetch humidity data
function fetchHumidityData() {
    fetch(`https://${SERVER_ADDRESS}/external/api/get?token=${BLYNK_TOKEN}&v0`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML element with the fetched data
            document.getElementById('humidity-chart').innerText = `Current Humidity: ${data}`;
        })
        .catch(error => console.error('Error fetching humidity data:', error));
}

// Function to fetch temperature data
function fetchTemperatureData() {
    fetch(`https://${SERVER_ADDRESS}/external/api/get?token=${BLYNK_TOKEN}&v1`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML element with the fetched data
            document.getElementById('temperature-chart').innerText = `Current Temperature: ${data}`;
        })
        .catch(error => console.error('Error fetching temperature data:', error));
}

// Function to fetch soil moisture data
function fetchSoilMoistureData() {
    fetch(`https://${SERVER_ADDRESS}/external/api/get?token=${BLYNK_TOKEN}&v3`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML element with the fetched data
            document.getElementById('soil-moisture-chart').innerText = `Current Soil Moisture: ${data}`;
        })
        .catch(error => console.error('Error fetching soil moisture data:', error));
}

// Call the fetch functions on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchHumidityData();
    fetchTemperatureData();
    fetchSoilMoistureData();
});
