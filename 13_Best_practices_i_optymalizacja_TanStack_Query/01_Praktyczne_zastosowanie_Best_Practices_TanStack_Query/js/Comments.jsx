import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

//add comments fn
const addComments = async (comment) => {
  try {
    const { data: result } = await axios.post('http://localhost:3001/comments', comment);
    console.log(result);
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};
