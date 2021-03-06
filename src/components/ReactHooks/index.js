import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'antd';
import { useCurrentValue } from './customHooks';

let tid;

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const currentCount = useCurrentValue(count);
  const countAdd = useCallback(() => {
    tid = setTimeout(() => {
      setCount(count + 1);
      setStep(step + 1);
    }, 2000);
  }, [count, step]);
  useEffect(() => {
    countAdd();
    return () => {
      if (tid) {
        clearTimeout(tid);
      }
    };
  }, [countAdd]);
  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(currentCount.current);
    }, 2000);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {currentCount.current} times (useRef)</p>
      <p>{step} times (step)</p>
      <Button onClick={log}>click</Button>
    </div>
  );
};
export default Hooks;
