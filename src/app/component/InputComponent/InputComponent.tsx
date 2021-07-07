import React, { useState } from 'react';
import styles from './index.module.scss';
import { getCityWeather } from '../../../services/weather.service';
import { getError } from '../../utils';

interface IProps {
  city: string | undefined;
  setUserInfo: any;
  setLoading: any;
  setError: any;
}

const InputComponent: React.FC<IProps> = ({
  city,
  setUserInfo,
  setLoading,
  setError,
}) => {
  const [enteredCityName, setEnteredCityName] = useState<string | undefined>(
    city
  );

  // if user will press enter or search icon then to get weather
  const getCurrentWeatherData = async () => {
    try {
      setLoading(true);
      // to get city coordinates
      const currentWeatherRes = await getCityWeather(enteredCityName);
      const {
        coord: { lon, lat },
      } = currentWeatherRes.data;
      // we will change the coordinates so that we can fetch 7 days weather data and hourly data for the location entered
      setUserInfo((prevState: any) => ({
        ...prevState,
        lon,
        lat,
        city: enteredCityName,
      }));
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setEnteredCityName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={styles.inputWrapper}>
        <div className={styles.inputFieldWithIconWrapper}>
          <img
            className={styles.marker}
            src='/assets/map-marker.svg'
            alt='map-marker-icon'
          />
          <input
            type='text'
            value={
              enteredCityName &&
              enteredCityName?.charAt(0).toUpperCase() +
                enteredCityName.slice(1)
            }
            onChange={handleChange}
            className={styles.inputField}
            name='location'
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                getCurrentWeatherData();
              }
            }}
          />
          <img
            className={styles.search}
            src='/assets/search.svg'
            alt='search-icon'
            onClick={() => {
              getCurrentWeatherData();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
