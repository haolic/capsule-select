import React, { useReducer } from 'react';
import { Button } from 'antd';
import reducer from './reducer';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 2 });
  return (
    <div>
      <div>{state.count}</div>
      <Button onClick={() => dispatch({ type: 'increment' })}>加</Button>
      <Button onClick={() => dispatch({ type: 'de' })}>减</Button>
      <Button onClick={() => dispatch({ type: 'error' })}>抛错</Button>
    </div>
  );
};
export default UseReducer;
