import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from './Redux';

export const User = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User</h1>
      <button onClick={() => dispatch(fetchUserData(1))}>Fetch user</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
