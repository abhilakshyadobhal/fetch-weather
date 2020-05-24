import axios from 'axios';

export const getCityWeather = async (_city: string | undefined) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${_city}&appid=af3f72199c0b9f7577f413ba180fecc7`
  );
  return res.data;
};

export const fetchWeather = async (
  _lat: number | undefined,
  _lng: number | undefined
) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${_lat}&lon=${_lng}&units=metric&exclude=minutely&appid=af3f72199c0b9f7577f413ba180fecc7`
  );
  return res;
};
