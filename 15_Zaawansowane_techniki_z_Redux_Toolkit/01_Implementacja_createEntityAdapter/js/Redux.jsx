import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit/src';

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

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
