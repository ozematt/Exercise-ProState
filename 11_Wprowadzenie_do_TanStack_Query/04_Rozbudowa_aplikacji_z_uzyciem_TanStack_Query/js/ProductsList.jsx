import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCartContext } from './CartContext.jsx';

export const ProductsList = () => {
  const { data, error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('http://localhost:3001/products', { method: 'GET' }).then((res) => res.json()),
  });

  const { addToCart } = useCartContext();

  return (
    <div>
      <Typography variant="h5">Products List</Typography>
      <List>
        {isError && <div>{error.message}</div>}
        {data &&
          data.map((product) => (
            <ListItem key={product.id}>
              <ListItemText primary={product.name} secondary={`${product.description} - $${product.price}`} />
              <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                Add to cart
              </Button>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
