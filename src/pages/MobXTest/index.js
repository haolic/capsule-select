import React from 'react';
import AppState from './state';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import styles from './index.less';

const TimerView = observer(({ appState }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
    }}
  >
    <Button onClick={appState.reset}>点击重置</Button>
    <span className={styles.timerStr}>{appState.timer.time}</span>
    <span className={styles.timerStr}>{appState.timer.localTime}</span>
  </div>
));
const MobXTest = () => {
  return (
    <div>
      <TimerView appState={new AppState()}></TimerView>
    </div>
  );
};

export default MobXTest;
