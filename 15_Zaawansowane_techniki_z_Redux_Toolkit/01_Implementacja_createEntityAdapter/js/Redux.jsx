import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id, //
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

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state) => state.products);

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;

export default store;
