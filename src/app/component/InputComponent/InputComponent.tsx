import React from 'react';
import styles from './index.module.scss';

interface IProps {}

const InputComponent: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <div className={styles.inputWrapper}>
        <div className={styles.inputFieldWithIconWrapper}>
          <img
            className={styles.marker}
            src='/assets/map-marker.svg'
            alt='map-marker-icon'
          />
          <input type='text' className={styles.inputField} name='location' />
          <img
            className={styles.search}
            src='/assets/search.svg'
            alt='search-icon'
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
