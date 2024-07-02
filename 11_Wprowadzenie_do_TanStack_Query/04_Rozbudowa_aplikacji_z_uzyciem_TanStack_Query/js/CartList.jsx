import { Button, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';

export const CartList = () => {
  const products = [];

  return (
    <div>
      <Typography variant="h5">Cart List</Typography>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </ListItem>
        ))}
      </List>
      <Alert icon={false} severity="success">
        Total price: $0
      </Alert>
    </div>
  );
};
