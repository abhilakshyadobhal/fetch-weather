import React, { useEffect, useState } from 'react';
import { getError } from '../utils';
import { getLocationFromIp } from '../../services/ipAddressLookup.service';
import { fetchWeather } from '../../services/weather.service';
import { DailyData } from '../component/DailyData';
import { CurrentDataCard } from '../component/CurrentDataCard';
import { HourlyData } from '../component/HourlyData';
import { InputComponent } from '../component/InputComponent';
import { Loader } from '../component/Loader';
import { Error } from '../component/Error';

const WeatherContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [userInfo, setUserInfo] = useState({
    lat: undefined,
    lon: undefined,
    city: undefined,
    country: undefined,
  });
  const [dailyData, setDailyData] = useState<any>([]);
  const [hourlyData, setHourlyData] = useState<any>([]);
  const [currentData, setCurrentData] = useState<any>({});

  const getUserInfo = async () => {
    try {
      setLoading(true);
      const userInfoResponse = await getLocationFromIp();
      const { city, country_name, longitude, latitude } = userInfoResponse.data;
      setUserInfo((prevState) => ({
        ...prevState,
        city,
        country: country_name,
        lon: longitude,
        lat: latitude,
      }));
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  const getWeatherDetails = async () => {
    try {
      setLoading(true);
      const res = await fetchWeather(userInfo.lat, userInfo.lon);
      setDailyData(res.data.daily);
      setHourlyData(res.data.hourly);
      setCurrentData(res.data.current);
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  // to fetch user location
  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo && userInfo.lat && userInfo.lon) {
      getWeatherDetails();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const render = () => {
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;
    return (
      <React.Fragment>
        {/* it will show the input field on the top */}
        <InputComponent
          setLoading={setLoading}
          setError={setError}
          setUserInfo={setUserInfo}
          city={userInfo.city}
        />

        {/* it will show the current data, humidity, pressure and hourly weather data */}
        <CurrentDataCard currentData={currentData}>
          <HourlyData hourlyData={hourlyData} />
        </CurrentDataCard>

        {/* it will show the daily data for the next 7 days */}
        <DailyData dailyData={dailyData} />
      </React.Fragment>
    );
  };

  return render();
};

export default WeatherContainer;
