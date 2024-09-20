import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};
