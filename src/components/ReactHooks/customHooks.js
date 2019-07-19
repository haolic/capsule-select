import { useRef, useEffect } from 'react';

const useCurrentValue = value => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  // 永远要对 useEffect 的依赖诚实，被依赖的参数一定要填上去，否则会产生非常难以察觉与修复的 BUG。
  return ref;
};

export { useCurrentValue };
