import { Typography, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const OrdersList = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('http://localhost:3001/orders').then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (id) => fetch(`http://localhost:3001/orders/${id}`, { method: 'DELETE' }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div>
      <Typography variant="h5">Orders List</Typography>
      {data &&
        data.map((order) => (
          <Card key={order.id} elevation={0}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {order.firstName} {order.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {order.address}
              </Typography>
              <List>
                {order.cart.map((product) => (
                  <ListItem key={product.id}>
                    <ListItemText primary={product.name} secondary={product.price} />
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color="error" onClick={() => handleDelete(order.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
