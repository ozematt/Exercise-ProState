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

  const onSubmit = () => {
    dispatch(addProduct());
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
      <div>Lista:</div>
    </>
  );
};
