import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit/src';

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addProduct: productsAdapter.addOne,
    removeProduct: productsAdapter.removeOne,
    updateProduct: productsAdapter.updateOne,
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;

export default store;
