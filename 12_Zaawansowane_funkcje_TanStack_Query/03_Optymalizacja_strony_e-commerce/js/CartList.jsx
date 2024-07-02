import { Button, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';
import { useCartContext } from './CartContext';

export const CartList = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <div>
      <Typography variant="h5">Cart List</Typography>
      <List>
        {cart.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
            <Button variant="contained" color="error" onClick={() => removeFromCart(product.id)}>
              Remove from cart
            </Button>
          </ListItem>
        ))}
      </List>
      <Alert icon={false} severity="success">
        Total price: ${cart.reduce((acc, product) => acc + product.price, 0)}
      </Alert>
    </div>
  );
};
