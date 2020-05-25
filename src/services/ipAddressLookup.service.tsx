import axios from 'axios';

export const getLocationFromIp = async () => {
  const res = await axios.get('https://ipapi.co/json');
  return res;
};
