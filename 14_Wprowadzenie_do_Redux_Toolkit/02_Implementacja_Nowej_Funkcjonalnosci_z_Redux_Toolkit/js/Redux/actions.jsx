import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async (userId, thunkAPI) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
});
