import React from 'react';

interface IProps {
  hourlyData: any;
}

const HourlyData: React.FC<IProps> = ({ hourlyData }) => {
  console.log(hourlyData);
  return <React.Fragment></React.Fragment>;
};

export default HourlyData;
