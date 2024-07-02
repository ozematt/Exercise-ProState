import React, { useState, useEffect } from 'react';

export const Counter = () => {
  ////DATA
  const [count, setCount] = useState(0);

  ////LOGIC
  const fetchData = async () => {
    const data = await new Promise((resolve) => setTimeout(() => resolve(10), 2000));
    setCount((prevState) => prevState + data);
  };

  useEffect(() => {
    console.log('Counter has changed:', count);
  }, [count]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDecrease = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  ////UI
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
