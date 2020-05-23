import axios from 'axios';

export const fetchWeather = async () => {
  const res = axios.get(
    'https://api.openweathermap.org/data/2.5/onecall?lat=30.3165&lon=78.0322&units=metric&exclude=minutely&appid=af3f72199c0b9f7577f413ba180fecc7'
  );
  return res;
};
