import { Button, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';
import { useCartContext } from './CartContext.jsx';

export const CartList = () => {
  const { removeFromCart, cart } = useCartContext();
  console.log(cart);

  const totalCartPrice = cart.length > 0 && cart.map((product) => product.price).reduce((a, b) => a + b);

  return (
    <div>
      <Typography variant="h5">Cart List</Typography>
      <List>
        {cart &&
          cart.map((product) => (
            <ListItem key={product.id}>
              <ListItemText primary={product.name} secondary={`$${product.price}`} />
              <Button variant="contained" color="error" onClick={() => removeFromCart(product.id)}>
                Remove from cart
              </Button>
            </ListItem>
          ))}
      </List>
      <Alert icon={false} severity="success">
        Total price: ${totalCartPrice}
      </Alert>
    </div>
  );
};
