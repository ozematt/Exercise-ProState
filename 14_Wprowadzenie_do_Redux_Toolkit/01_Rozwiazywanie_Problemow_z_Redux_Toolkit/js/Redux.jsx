import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('users/fetchById', async (userId, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {})
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
