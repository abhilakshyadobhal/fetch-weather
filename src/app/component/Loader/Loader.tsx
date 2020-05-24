import React from 'react';
import styles from './index.module.scss';

const Loader = () => {
  return (
    <React.Fragment>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
        <br />
        <h3>Fetching Weather...</h3>
      </div>
    </React.Fragment>
  );
};

export default Loader;
