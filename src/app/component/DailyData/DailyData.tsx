import React from 'react';
import DailyDataCard from '../DailyDataCard';
import { weekDay } from '../../utils';
import styles from './index.module.scss';

interface IProps {
  dailyData: any;
}

const DailyData: React.FC<IProps> = ({ dailyData }) => {
  console.log(dailyData);
  return (
    <React.Fragment>
      <div className={styles.dailyDataCardWrapper}>
        {dailyData.length > 0 &&
          dailyData.map(({ temp, weather, dt }: any, i: number) => (
            <DailyDataCard
              key={i}
              day={weekDay[new Date(dt * 1000).getDay()]}
              minTemp={parseInt(temp.min)}
              maxTemp={parseInt(temp.max)}
              weatherType={weather[0].main}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default DailyData;
