import axios from 'axios';

export const getLocationFromIp = async () => {
  const res = await axios.get('http://ip-api.com/json');
  return res.data;
};
