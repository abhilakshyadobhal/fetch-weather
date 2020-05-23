import React from 'react';
import styles from './index.module.scss';
import { renderWeatherIconAccordingToWeather } from '../../utils';

interface IProps {
  day: string;
  minTemp: number;
  maxTemp: number;
  weatherType: string;
}

const DailyDataCard: React.FC<IProps> = ({
  day,
  minTemp,
  maxTemp,
  weatherType,
}) => {
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.day}>{day}</div>
        <div className={styles.temperature}>
          <span className={styles.temperature__max}>{maxTemp}&deg;</span>
          &nbsp;&nbsp;
          <span className={styles.temperature__min}>{minTemp}&deg;</span>
        </div>
        <div className={styles.weatherDetails}>
          <img
            src={`/assets/weather-icons/${renderWeatherIconAccordingToWeather(
              weatherType
            )}`}
            alt='weather-icon'
          />
          <div className={styles.weatherType}>{weatherType}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyDataCard;
