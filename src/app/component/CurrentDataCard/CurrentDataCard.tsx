import React from 'react';
import _ from 'lodash';
import styles from './index.module.scss';
import { renderWeatherIconAccordingToWeather } from '../../utils';

interface IProps {
  currentData: any;
  children: any;
}

const CurrentDataCard: React.FC<IProps> = ({ currentData, children }) => {
  const sunriseTiming =
    _.get(currentData, 'sunrise', undefined) &&
    new Date(currentData.sunrise * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
    });

  const sunsetTiming =
    _.get(currentData, 'sunset', undefined) &&
    new Date(currentData.sunset * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
    });

  return (
    <React.Fragment>
      <div className={styles.todayWeatherDataWrapper}>
        <div className={styles.currentWeather}>
          <span className={styles.temperature}>
            {_.get(currentData, 'temp', undefined)}&deg;C
          </span>
          <img
            src={`/assets/weather-icons/${renderWeatherIconAccordingToWeather(
              _.get(currentData, 'weather[0].main', undefined)
            )}`}
            alt=''
          />
        </div>
        {/* children will show hourly weather data */}
        {children}
        <div className={styles.pressureHumidityWrapper}>
          <div className={styles.pressure}>
            <span className={styles.label}>Pressure</span>
            <span className={styles.value}>
              {_.get(currentData, 'pressure', undefined)} hpa
            </span>
          </div>
          <div className={styles.humidity}>
            <span className={styles.label}>Humidity</span>
            <span className={styles.value}>
              {_.get(currentData, 'humidity', undefined)} %
            </span>
          </div>
        </div>
        <div className={styles.sunriseSunsetWrapper}>
          <div className={styles.sunrise}>
            <span className={styles.label}>Sunrise</span>
            <span className={styles.value}>{sunriseTiming || ''}</span>
          </div>
          <div className={styles.sunset}>
            <span className={styles.label}>Sunset</span>
            <span className={styles.value}>{sunsetTiming || ''}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentDataCard;
