import React, { useState } from 'react';
import styles from './index.module.scss';

import { getError } from '../../utils';
import { getGeoCoordinates } from '../../../services/reverseGeoLocation.service';

interface IProps {
  city: string | undefined;
  setUserInfo: any;
  setLoading: any;
  setError: any;
}

const InputComponent: React.FC<IProps> = ({
  city,
  setUserInfo,
  setLoading,
  setError,
}) => {
  const [enteredCityName, setEnteredCityName] = useState<string | undefined>(
    city
  );

  // if user will press enter or search icon then to get weather
  const getCoordinates = async () => {
    try {
      setLoading(true);
      const res = await getGeoCoordinates(enteredCityName);
      const { features: [cityWhoseCoordNeeded] }: any = res;
      const { center, place_name } = cityWhoseCoordNeeded;
      const placeNameArr = place_name.split(', ');
      setUserInfo((prevState: any) => ({
        ...prevState, lon: center?.[0], lat: center?.[1],
        city: placeNameArr?.[0], country: placeNameArr?.[placeNameArr.length - 1]
      }))
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setEnteredCityName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={styles.inputWrapper}>
        <div className={styles.inputFieldWithIconWrapper}>
          <img
            className={styles.marker}
            src='/assets/map-marker.svg'
            alt='map-marker-icon'
          />
          <input
            type='text'
            value={
              enteredCityName &&
              enteredCityName?.charAt(0).toUpperCase() +
              enteredCityName.slice(1)
            }
            onChange={handleChange}
            className={styles.inputField}
            name='location'
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                getCoordinates();
              }
            }}
          />
          <img
            className={styles.search}
            src='/assets/search.svg'
            alt='search-icon'
            onClick={() => {
              getCoordinates();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
