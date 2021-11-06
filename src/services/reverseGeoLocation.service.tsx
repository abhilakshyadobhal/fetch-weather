import axios from 'axios';

export const getGeoCoordinates = async (city: string | undefined) => {
  const params = {
    access_token: process.env.REACT_APP_MAP_API_KEY,
  };
  const res = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
    { params }
  );

  return res.data;
};
