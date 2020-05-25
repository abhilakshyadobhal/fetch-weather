import React from 'react';
import styles from './index.module.scss';

interface IProps {
  error: string;
}

const Error: React.FC<IProps> = ({ error }) => {
  return (
    <React.Fragment>
      <div className={styles.errorWrapper}>
        <img src='/assets/error.svg' alt='error-icon' />
        <div>
          <h4>{error}</h4>
        </div>
        <button
          className={styles.button}
          onClick={() => window.location.reload(true)}
        >
          Reload
        </button>
      </div>
    </React.Fragment>
  );
};

export default Error;
