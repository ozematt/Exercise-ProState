import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from './Redux/actions.jsx';
import { clearNotifications } from './Redux/store.jsx';

export const NotificationsPanel = () => {
  const dispatch = useDispatch();
  const { notifications, loading } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(fetchNotifications())}>Odśwież Powiadomienia</button>
      <button onClick={() => dispatch(clearNotifications())}>Wyczyść Powiadomienia</button>
      {loading ? (
        <p>Ładowanie...</p>
      ) : (
        <ul>
          {notifications?.map((notification) => (
            <li key={notification.id}>{notification.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
