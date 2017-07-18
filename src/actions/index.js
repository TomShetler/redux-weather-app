import axios from 'axios';

const API_KEY ='ea639a650c282854875e3f6cdd69a624';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request is', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
