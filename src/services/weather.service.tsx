import axios from 'axios';

export const fetchWeather = async (
  _lat: number = 30.3165,
  _lng: number = 78.0322
) => {
  console.log(_lat, _lng);
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${_lat}&lon=${_lng}&units=metric&exclude=minutely&appid=af3f72199c0b9f7577f413ba180fecc7`
  );
  return res;
};
