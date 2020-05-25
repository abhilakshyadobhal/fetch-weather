import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './index.module.scss';

interface IProps {
  hourlyData: any;
}

const HourlyData: React.FC<IProps> = ({ hourlyData }) => {
  // it will contain all the 24 hours
  const temperatures =
    hourlyData && hourlyData.slice(0, 23).map(({ temp }: any) => temp);

  // it will containe the time
  const times =
    hourlyData &&
    hourlyData.slice(0, 23).map(({ dt }: any, i: number) =>
      new Date(
        new Date(dt * 1000).setMinutes(new Date(dt * 1000).getMinutes() - 30)
      ).toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      })
    );

  const data = {
    labels: times,
    datasets: [
      {
        fill: false,
        borderColor: '#26abff',
        data: temperatures,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className={styles.chartWrapper}>
        <div className={styles.chartAreaWrapper}>
          <Line
            data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              legend: {
                display: false,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      display: false,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: { autoSkip: false, padding: 25 },
                    gridLines: {
                      display: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
      <div className={styles.chartWrappers}></div>
    </React.Fragment>
  );
};

export default HourlyData;
