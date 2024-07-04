import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react';

//Debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

//FetchDATA
const simulateFetchProducts = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          new Array(250).fill(0).map((_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 100).toFixed(2),
            category: ['Electronics', 'Books', 'Clothing'][Math.floor(Math.random() * 3)],
          }))
        ),
      1000
    )
  );

// Reducer Function
const ActionTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_FILTER: 'SET_FILTER',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
};

const initialState = {
  products: [],
  filter: '',
  sortOrder: 'asc',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ActionTypes.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export const ProductCatalog = () => {
  ////DATA
  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, filter, sortOrder } = state;
  //Debounce
  const debouncedFilter = useDebounce(filter, 300);

  ////LOGIC
  //dataFetch
  useEffect(() => {
    simulateFetchProducts().then((data) => {
      dispatch({
        type: ActionTypes.SET_PRODUCTS,
        payload: data,
      });
    });
  }, []);

  //input filter change with useCallback
  const handleFilterChange = useCallback((e) => {
    dispatch({
      type: 'SET_FILTER',
      payload: e.target.value,
    });
  }, []);

  //select change with useCallback
  const handleSortOrderChange = useCallback((e) => {
    dispatch({
      type: 'SET_SORT_ORDER',
      payload: e.target.value,
    });
  }, []);

  //filtration with useMemo
  const filteredProducts = useMemo(
    () => products.filter((product) => product.category.toLowerCase().includes(debouncedFilter.toLowerCase())),
    [debouncedFilter, products]
  );

  //sorting with useMemo
  const sortedProducts = useMemo(
    () =>
      filteredProducts.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }),
    [sortOrder, filteredProducts]
  );

  ////UI
  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by category..." />
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      {sortedProducts.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 4,
            padding: 8,
            gap: 5,
            borderBottom: '1px solid black',
          }}
        >
          {product.name}
          <span>${product.price}</span>
          <span>{product.category}</span>
        </div>
      ))}
    </div>
  );
};
