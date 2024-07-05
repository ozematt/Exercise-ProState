import { useReducer } from 'react';

const initialState = {
  name: '',
  role: '',
  users: [],
  userCounter: 0,
  sortRole: '',
};

const ActionTypes = {
  SET_USERS: 'SET_USERS',
  ADD_USER: 'ADD_USER',
  SEARCH_USER: 'SEARCH_USER',
  FILTER_USER: 'FILTER_USER',
  SORT_ORDER: 'SORT_ORDER',
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
    case ActionTypes.SORT_ORDER:
      return {
        ...state,
        sortRole: action.role,
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
  const handleSortRole = (e) => {
    dispatch({
      type: ActionTypes.SORT_ORDER,
      role: e.target.value,
    });
  };

  const filtredUsersByName = () => {
    state.users.filter((user) => user.name.toLowerCase().includes(state.name.toLowerCase()));
  };

  const sortedUsersByRole = () => {
    state.users.filter((user) => user.role.toLowerCase().includes(state.sortRole.toLowerCase()));
  };

  console.log(state.name);
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
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <select
          name="role"
          id="role"
          onChange={handleSortRole}
          style={{
            height: '47px',
          }}
        >
          <option value="-1">filter by role</option>
          {state.users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.role}
            </option>
          ))}
        </select>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {state.users.map((user) => (
          <li key={user.name} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};
