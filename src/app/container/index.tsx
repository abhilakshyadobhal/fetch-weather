import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../../services/weather.service';
import { DailyData } from '../component/DailyData';
import { CurrentDataCard } from '../component/CurrentDataCard';
import { HourlyData } from '../component/HourlyData';
import { InputComponent } from '../component/InputComponent';

const WeatherContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyData, setDailyData] = useState<any>([]);
  const [hourlyData, setHourlyData] = useState<any>([]);
  const [currentData, setCurrentData] = useState<any>({});

  const getWeatherDetails = async () => {
    try {
      setLoading(true);
      const res = await fetchWeather();
      setDailyData(res.data.daily);
      setHourlyData(res.data.hourly);
      setCurrentData(res.data.current);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);

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
