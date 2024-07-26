import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, addProduct, removeProduct, updateProduct } from './Redux.jsx';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const Products = () => {
  // Tutaj implementacja logiki komponentu, np. formularze do dodawania/edycji produktów
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProductName, setEditingProductName] = useState('');

  const { register, reset, handleSubmit, getValues } = useForm();

  const onSubmit = (data) => {
    const modifiedData = { ...data, id: Date.now() };
    dispatch(addProduct(modifiedData));
    reset();
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleEditClick = (product) => {
    if (editingProductId === product.id) {
      // Zatwierdzenie edycji
      dispatch(updateProduct({ id: product.id, changes: { productName: editingProductName } }));
      setEditingProductId(null);
      setEditingProductName('');
    } else {
      // Rozpoczęcie edycji
      setEditingProductId(product.id);
      setEditingProductName(product.productName);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('productName')} placeholder="Produkt..." />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Dodaj produkt
        </Button>
      </form>
      <div>
        Lista:
        <ul>
          {products.map((product) => (
            <div key={product.id}>
              {editingProductId === product.id ? (
                <TextField value={editingProductName} onChange={(e) => setEditingProductName(e.target.value)} />
              ) : (
                <li>{product.productName}</li>
              )}
              <Button variant="contained" onClick={() => handleEditClick(product)}>
                {editingProductId === product.id ? 'Zatwierdź' : 'Edytuj'}
              </Button>
              <Button variant="contained" onClick={() => handleRemoveProduct(product.id)}>
                Usuń
              </Button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
