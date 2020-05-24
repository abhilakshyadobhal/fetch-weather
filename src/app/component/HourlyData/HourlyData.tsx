import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './index.module.scss';

interface IProps {
  hourlyData: any;
}

const HourlyData: React.FC<IProps> = ({ hourlyData }) => {
  const temperatures =
    hourlyData && hourlyData.slice(0, 23).map(({ temp }: any) => temp);

  const times =
    hourlyData &&
    hourlyData.slice(0, 23).map(
      ({ dt }: any, i: number) =>
        // [
        new Date(dt * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        })
      // temperatures[i],
      // ]
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
                // {
                //   ticks: {
                //     callback: (value: any) => {
                //       return '$' + value;
                //     },
                //   },
                // },
                {
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default HourlyData;
