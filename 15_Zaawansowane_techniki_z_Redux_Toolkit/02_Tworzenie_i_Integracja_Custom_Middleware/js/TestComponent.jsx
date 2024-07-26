import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Redux.jsx';

export const TestComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <p>{state}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};
