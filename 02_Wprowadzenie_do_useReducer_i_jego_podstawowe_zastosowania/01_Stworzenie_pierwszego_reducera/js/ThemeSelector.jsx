import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      throw new Error();
    }
  }
};

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
