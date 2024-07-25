import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: { list: [], loading: false, error: null },
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(.pending, (state, action) => {
        state.loading = 'loading';
    });
    .addCase(.fulfilled, (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
    });
    .addCase(.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});
