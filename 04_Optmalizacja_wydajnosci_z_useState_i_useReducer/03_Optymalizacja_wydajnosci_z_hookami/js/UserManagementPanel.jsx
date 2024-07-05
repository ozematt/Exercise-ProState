import { useReducer, useMemo, useCallback, useEffect, useState } from 'react';

const initialState = {
  name: '',
  role: '',
  users: [],
  userCounter: 0,
  sortRole: '',
  filter: '',
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
    case ActionTypes.FILTER_USER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

//Debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const UserManagementPanel = () => {
  ////DATA
  const [state, dispatch] = useReducer(addUserReducer, initialState);
  const { name, role, users, filter, sortOrder, sortRole } = state;
  const debouncedFilter = useDebounce(filter, 300);

  ////LOGIC
  //handle input change
  const handleSetUser = useCallback((e) => {
    dispatch({
      type: ActionTypes.SET_USERS,
      field: e.target.name,
      value: e.target.value,
    });
  }, []);

  //handle add user
  const handleAddUser = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ActionTypes.ADD_USER,
        user: { name: name, role: role, id: state.userCounter },
      });
      dispatch({
        type: ActionTypes.FORM_RESET,
      });
    },
    [state.name, state.role]
  );

  //handle select change to sort by the role
  const handleSortRole = useCallback((e) => {
    dispatch({
      type: ActionTypes.SORT_ORDER,
      role: e.target.value,
    });
  }, []);

  const handleFilterChange = useCallback((e) => {
    dispatch({
      type: ActionTypes.FILTER_USER,
      filter: e.target.value,
    });
  }, []);

  const filtredUsersByName = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(debouncedFilter.toLowerCase())),
    [debouncedFilter, users]
  );
  console.log(filtredUsersByName);
  console.log(filter);

  const sortedUsersByRole = useMemo(
    () => users.filter((user) => user.role.toLowerCase().includes(sortRole.toLowerCase())),
    [users, sortRole]
  );

  console.log(state);
  ////UI
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>User Management Panel</h2>
      <div style={{ marginBottom: '20px' }}>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleSetUser}
            style={{ marginRight: '10px', padding: '10px' }}
          />
          <input
            type="text"
            name="role"
            value={role}
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
          name="filter"
          value={filter}
          onChange={handleFilterChange}
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
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.role}
            </option>
          ))}
        </select>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filtredUsersByName.map((user) => (
          <li key={user.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};
