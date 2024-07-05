import { useReducer } from 'react';

const initialState = {
  name: '',
  role: '',
  users: [],
  userCounter: 0,
};

const ActionTypes = {
  SET_USERS: 'SET_USERS',
  ADD_USER: 'ADD_USER',
  SEARCH_USER: 'SEARCH_USER',
  FILTER_USER: 'FILTER_USER',
  FORM_RESET: 'FORM_RESET',
};

//reducer function
const addUserReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        userCounter: state.userCounter + 1,
      };
    case ActionTypes.FORM_RESET:
      return {
        ...state,
        name: '',
        role: '',
      };
    default:
      return state;
  }
};

export const UserManagementPanel = () => {
  ////DATA
  const [state, dispatch] = useReducer(addUserReducer, initialState);

  ////LOGIC
  //handle input change
  const handleSetUser = (e) => {
    dispatch({
      type: ActionTypes.SET_USERS,
      field: e.target.name,
      value: e.target.value,
    });
  };
  //handle add user
  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.ADD_USER,
      user: { name: state.name, role: state.role, id: state.userCounter },
    });
    dispatch({
      type: ActionTypes.FORM_RESET,
    });
  };

  console.log(state.users);
  ////UI
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>User Management Panel</h2>
      <div style={{ marginBottom: '20px' }}>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={handleSetUser}
            style={{ marginRight: '10px', padding: '10px' }}
          />
          <input
            type="text"
            name="role"
            value={state.role}
            placeholder="Role"
            onChange={handleSetUser}
            style={{ marginRight: '10px', padding: '10px' }}
          />
          <button type="submit" style={{ padding: '10px' }}>
            Add User
          </button>
        </form>
      </div>
      <input
        type="text"
        placeholder="Search by name..."
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {[].map((user) => (
          <li key={user.name} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};
