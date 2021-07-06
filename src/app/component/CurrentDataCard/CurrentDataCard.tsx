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
        <div className={styles.weatherAllInfo}>
          <div>
            <span className={styles.label}>
              {_.get(currentData, 'pressure', undefined)} hpa
            </span>
            <span className={styles.value}>
              Pressure
            </span>
          </div>
          <div>
            <span className={styles.label}>{_.get(currentData, 'humidity', undefined)} %</span>
            <span className={styles.value}>
              Humidity
            </span>
          </div>
          <div>
            <span className={styles.label}>{sunriseTiming || ''}</span>
            <span className={styles.value}>Sunrise</span>
          </div>
          <div>
            <span className={styles.label}>{sunsetTiming || ''}</span>
            <span className={styles.value}>Sunset</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentDataCard;
