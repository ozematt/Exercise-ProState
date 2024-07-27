import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Redux.jsx';

export const TestComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};
