import React from 'react';
import styles from './index.less';

const Imgcover = () => {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div className={styles.imgWrap}></div>
      'background-size: contain'
    </div>
  );
};

export default Imgcover;
