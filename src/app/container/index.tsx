import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../../services/weather.service';
import { DailyData } from '../component/DailyData';
import { CurrentDataCard } from '../component/CurrentDataCard';
import { HourlyData } from '../component/HourlyData';
import { InputComponent } from '../component/InputComponent';

const WeatherContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({
    lat: undefined,
    lng: undefined,
  });
  const [dailyData, setDailyData] = useState<any>([]);
  const [hourlyData, setHourlyData] = useState<any>([]);
  const [currentData, setCurrentData] = useState<any>({});

  const getWeatherDetails = async () => {
    try {
      setLoading(true);
      console.log(position.lat, position.lng);
      const res = await fetchWeather(position.lat, position.lng);
      setDailyData(res.data.daily);
      setHourlyData(res.data.hourly);
      setCurrentData(res.data.current);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getCoordinates = (position: any) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    setPosition((prevState) => ({
      ...prevState,
      lat,
      lng,
    }));
  };

  useEffect(() => console.log(position), [position]);

  // to fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    }
  }, []);

  useEffect(() => {
    getWeatherDetails();
  }, [position]);

  return (
    <React.Fragment>
      <InputComponent />
      <DailyData dailyData={dailyData} />
      <CurrentDataCard currentData={currentData}>
        <HourlyData hourlyData={hourlyData} />
      </CurrentDataCard>
    </React.Fragment>
  );
};

export default WeatherContainer;
