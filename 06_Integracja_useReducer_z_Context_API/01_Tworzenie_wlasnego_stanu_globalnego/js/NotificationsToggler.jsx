import { useContext } from 'react';
import { UserPreferencesContext } from './UserPreferencesContext.jsx';

export const NotificationsToggler = () => {
  const { dispatch } = useContext(UserPreferencesContext);

  return (
    <div>
      <h2>Notifications</h2>
      <div>
        <label htmlFor="on">On</label>
        <input
          onClick={() =>
            dispatch({
              type: 'TOGGLE_NOTIFICATION',
              notification: true,
            })
          }
          type="radio"
          id="on"
          name="notifications"
          value="on"
        />
      </div>
      <div>
        <label htmlFor="off">Off</label>
        <input
          onClick={() =>
            dispatch({
              type: 'TOGGLE_NOTIFICATION',
              notification: false,
            })
          }
          type="radio"
          id="off"
          name="notifications"
          value="off"
        />
      </div>
    </div>
  );
};
