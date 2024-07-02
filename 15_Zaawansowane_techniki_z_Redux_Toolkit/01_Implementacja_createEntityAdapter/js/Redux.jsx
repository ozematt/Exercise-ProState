import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const productsAdapter = {};

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {},
});

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export const { productAdded, productRemoved, productUpdated } = productsSlice.actions;

export default store;
