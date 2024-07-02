import { useState } from 'react';

export const ShoppingList = () => {
  ///DATA
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState('');
  const [error, setError] = useState('');

  ////LOGIC
  const handleProductAdd = (e) => {
    e.preventDefault();
    if (item) {
      setProducts((prevState) => [...prevState, { name: item, id: Date.now() }]);
      setItem('');
      setError('');
    } else {
      setError('Pole nie może być puste');
    }
  };

  const handleProductRemove = (id) => {
    setProducts((prevState) => prevState.filter((item) => item.id !== id));
  };

  ////UI
  return (
    <>
      <form onSubmit={handleProductAdd}>
        <input value={item} type="text" onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Dodaj</button>
        <p style={{ color: 'red' }}>{error}</p>
      </form>
      <div>
        <h2>Lista Produktów</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}
              <button onClick={() => handleProductRemove(product.id)}>Usuń produkt</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
