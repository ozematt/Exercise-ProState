import { useReducer } from 'react';
import { initialState, reducer } from './Counter.jsx';

export const ThemeSelector = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const style = {
    fontSize: state.count,
  };

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <p style={style}>Text</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
};
