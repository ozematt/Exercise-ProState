import axios from 'axios';

const fetchData = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const PostsList = () => {
  return null;
};
