import axios from 'axios';

export const getLocationFromIp = async () => {
  const res = await axios.get('https://ip-api.com/json');
  return res.data;
};
