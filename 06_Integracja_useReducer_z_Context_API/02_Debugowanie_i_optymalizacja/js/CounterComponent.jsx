import React from 'react';
import { useGlobalState } from './GlobalStateContext';

export const CounterComponent = React.memo(() => {
  const { state, dispatch } = useGlobalState();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
});
