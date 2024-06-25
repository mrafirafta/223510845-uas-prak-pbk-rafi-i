<template>
  <q-card class="weather-widget">
    <q-card-section class="weather-info" @click="toggleDetails">
      <div class="weather-icon">
        <img :src="weatherIconUrl" :alt="weather.description">
      </div>
      <div class="weather-details">
        <h3>{{ location }}</h3>
        <p class="temperature">{{ temperature }} °C</p>
        <p class="weather-description">{{ weather.description }}</p>
      </div>
    </q-card-section>

    <q-card-section class="location-search">
      <q-input
        outlined
        dense
        v-model="searchLocation"
        placeholder="Enter location..."
        @keyup.enter="fetchWeather"
        class="search-input"
      />
      <q-btn
        @click="fetchWeather"
        class="search-btn"
        label="Search"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios';

const apiKey = "b370b0afa7469eb849bceeb50afd90a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

export default {
  name: 'WidgetWeather',
  data() {
    return {
      searchLocation: '',
      location: '',
      weather: {},
      temperature: 0,
      weatherIconUrl: 'http://openweathermap.org/img/wn/01d.png',
      showDetails: false
    };
  },
  methods: {
    fetchWeather() {
      axios.get(apiUrl, {
        params: {
          q: this.searchLocation,
          appid: apiKey,
          units: 'metric'
        }
      })
      .then(response => {
        this.location = response.data.name;
        this.weather = response.data.weather[0];
        this.temperature = response.data.main.temp;
        this.weatherIconUrl = `http://openweathermap.org/img/wn/${this.weather.icon}.png`;
        this.showDetails = true; // Show weather details after fetching
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    resetWeather() {
      this.searchLocation = '';
      this.location = '';
      this.weather = {};
      this.temperature = 0;
      this.weatherIconUrl = 'http://openweathermap.org/img/wn/01d.png';
      this.showDetails = false;
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>

<style scoped>
.weather-widget {
  max-width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #5f27cd, #341f97);
  color: #fff;
  text-align: center;
  transition: background 0.3s ease;
  position: relative;
  top: 70px;
}

.weather-widget:hover {
  background: linear-gradient(to bottom, #341f97, #5f27cd);
}

.weather-info {
  cursor: pointer;
  padding: 20px 0;
  transition: transform 0.3s ease;
}

.weather-info:hover {
  transform: scale(1.05);
}

.weather-icon img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.weather-details {
  margin-top: 10px;
}

.temperature {
  font-size: 28px;
  font-weight: bold;
}

.location-search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.search-input {
  flex: 1;
  margin-right: 10px;
  color: #fff;
}

.search-btn {
  border-radius: 25px; /* Rounded button */
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #9b59b6; /* Purple background */
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #8e44ad; /* Darker purple on hover */
  transform: scale(1.05);
}
</style>
