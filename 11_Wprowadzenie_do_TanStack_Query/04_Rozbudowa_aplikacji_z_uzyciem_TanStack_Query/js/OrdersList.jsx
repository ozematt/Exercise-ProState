import { Typography, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';

export const OrdersList = () => {
  const orders = [];

  return (
    <div>
      <Typography variant="h5">Orders List</Typography>
      {orders.map((order) => (
        <Card key={order.id} elevation={0}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {order.firstName} {order.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.address}
            </Typography>
            <List>
              {order.products.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={product.price} />
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
