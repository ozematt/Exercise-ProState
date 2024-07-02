import React, { useState, useEffect } from 'react';

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

export const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    simulateFetchProducts().then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => product.category.toLowerCase().includes(filter.toLowerCase()));
  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by category..."
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
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
