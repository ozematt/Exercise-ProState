import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, addProduct, removeProduct, updateProduct } from './Redux.jsx';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export const Products = () => {
  // Tutaj implementacja logiki komponentu, np. formularze do dodawania/edycji produktów
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  console.log(products);

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = (data) => {
    const modifiedData = { ...data, id: Date.now() };
    dispatch(addProduct(modifiedData));
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
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
              <li> {product.productName}</li>
              <Button variant="contained" onClick={dispatch(updateProduct(product.id))}>
                Edytuj
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
