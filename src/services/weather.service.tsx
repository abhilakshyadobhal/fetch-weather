import axios from 'axios';

export const getCityWeather = async (city: string | undefined) => {
  const params = {
    q: city,
    appId: process.env.REACT_APP_WEATHER_API_KEY,
  };
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    { params }
  );
  console.log(res);
  return res;
};

export const fetchWeather = async (
  lat: number | undefined,
  lon: number | undefined
) => {
  const params = {
    lat,
    lon,
    units: 'metric',
    exclude: 'minutely',
    appId: process.env.REACT_APP_WEATHER_API_KEY,
  };
  const res = axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
    params,
  });
  return res;
};
