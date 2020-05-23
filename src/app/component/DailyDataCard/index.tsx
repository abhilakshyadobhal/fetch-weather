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
        <div className='day'>{day}</div>
        <div className='temp'>
          <span className='min'>{minTemp}&deg;</span>
          &nbsp;&nbsp;
          <span className='max'>{maxTemp}&deg;</span>
        </div>
        <div className='weathericon'>
          <img
            src={`/assets/weather-icons/${renderWeatherIconAccordingToWeather(
              weatherType
            )}`}
            alt=''
          />
          <div className='weatherType'>{weatherType}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyDataCard;
