import React from 'react';
import AppState from './state';
import { Button } from 'antd';
import { observer } from 'mobx-react';

const TimerView = observer(({ appState }) => (
  <div
    style={{
      width: 300,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
    }}
  >
    <Button onClick={appState.reset}>点击重置</Button>
    <span>{appState.timer}</span>
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
