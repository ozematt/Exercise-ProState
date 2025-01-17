import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, addProduct, removeProduct, updateProduct } from './Redux.jsx';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const Products = () => {
  ////DATA
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  //state for edited field, with name and id
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProductName, setEditingProductName] = useState('');
  //useForm
  const { register, reset, handleSubmit } = useForm();

  ////LOGIC
  //submit data
  const onSubmit = (data) => {
    const modifiedData = { ...data, id: Date.now() }; //added id to data
    dispatch(addProduct(modifiedData));
    reset(); // reset field from useForm
  };
  //remove product
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  //handle edit field
  const handleEditClick = (product) => {
    if (editingProductId === product.id) {
      // edit approval
      dispatch(updateProduct({ id: product.id, changes: { productName: editingProductName } }));
      //reset edit state
      setEditingProductId(null);
      setEditingProductName('');
    } else {
      // action start, set edited element id and name
      setEditingProductId(product.id);
      setEditingProductName(product.productName);
    }
  };

  ////UI
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
