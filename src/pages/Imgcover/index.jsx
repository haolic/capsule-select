import React, { useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';

const Imgcover = () => {
  const [type, setType] = useState('contain');
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div
        className={styles.imgWrap}
        style={{
          backgroundSize: type,
        }}
      ></div>
      <div>
        'background-size: {type}'
        <Button
          onClick={() => {
            setType(type === 'contain' ? 'cover' : 'contain');
          }}
        >
          切换为{type === 'contain' ? 'cover' : 'contain'}
        </Button>
      </div>
    </div>
  );
};

export default Imgcover;
