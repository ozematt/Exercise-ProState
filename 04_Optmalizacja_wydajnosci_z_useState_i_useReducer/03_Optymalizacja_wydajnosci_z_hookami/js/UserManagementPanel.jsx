import { useReducer } from 'react';

const initialState = {
  name: '',
  role: '',
};

const ActionTypes = {
  ADD_USER: 'ADD_USER',
  SEARCH_USER: 'SEARCH_USER',
  FILTER_USER: 'FILTER_USER',
};

const addUserReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        [action.field]: action.value,
      };
  }
};

export const UserManagementPanel = () => {
  const [state, dispatch] = useReducer(addUserReducer, initialState);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>User Management Panel</h2>
      <div style={{ marginBottom: '20px' }}>
        <form>
          <input type="text" placeholder="Name" style={{ marginRight: '10px', padding: '10px' }} />
          <input type="text" placeholder="Role" style={{ marginRight: '10px', padding: '10px' }} />
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
