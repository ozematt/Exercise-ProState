import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

export const ProductsList = () => {
  const products = [];

  return (
    <div>
      <Typography variant="h5">Products List</Typography>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`${product.description} - $${product.price}`} />
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
