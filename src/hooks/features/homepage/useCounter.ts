import { useState } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  function increment() {
    setCount((count) => count + val);
  }

  function decrement() {
    setCount((count) => count - val);
  }

  function reset() {
    setCount(0);
  }

  return {
    count,
    increment,
    decrement,
    reset,
    val,
    setVal,
  };
}
