import React, { useState, useEffect } from 'react';

export const Counter = () => {
  let [count, setCount] = useState(0);

  const fetchData = async () => {
    const data = await new Promise((resolve) => setTimeout(() => resolve(10), 2000));
    count += data;
  };

  useEffect(() => {
    console.log('Counter has changed:', count);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          count++;
          setCount(count);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          count--;
          setCount(count);
        }}
      >
        Decrease
      </button>
    </div>
  );
};
