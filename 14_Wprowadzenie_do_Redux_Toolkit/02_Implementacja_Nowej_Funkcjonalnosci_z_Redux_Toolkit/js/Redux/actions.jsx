import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async (userId, thunkAPI) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
});

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state, action) => {
        state.loading = 'loading';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
