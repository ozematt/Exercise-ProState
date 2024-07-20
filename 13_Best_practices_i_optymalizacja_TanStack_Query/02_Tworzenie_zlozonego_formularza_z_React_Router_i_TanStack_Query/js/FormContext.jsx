// import React, { useCallback, useMemo, } from 'react';
// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
import { z } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
// import {useNavigate} from 'react-router-dom';

// const FormContext = createContext();

// const initialState = {
//   name: '',
//   surname: '',
//   email: '',
//   street: '',
//   houseNumber: '',
//   city: '',
//   postalCode: '',
// };

// const postFormData = async (formData) => {
//   try {
//     const { data } = await axios.post('http://localhost:3001/formData', formData);
//     console.log(data);
//   } catch (error) {
//     console.error('There has been a problem:', error);
//   }
// };

export const schema = z.object({
  name: z.string().min(1, 'Pole wymagane'),
  surname: z.string().min(1, 'Pole wymagane'),
  email: z.string().email({ required: true, message: 'Nieprawidłowy email' }),
  street: z.string().min(1, 'Pole wymagane'),
  houseNumber: z.string().min(1, 'Pole wymagane'),
  city: z.string().min(1, 'Pole wymagane'),
  postalCode: z
    .string()
    .min(1, 'Polewymagane')
    .regex(/^[0-9]{2}-[0-9]{3}$/, 'Nieprawidłowy kod pocztowy XX-XXX'),
});

export const FormContext = ({ children }) => {
  const methods = useForm();
  // const navigate = useNavigate();

  // const memoizedContext = useMemo(() => ({ state, onSubmit }), [state]);

  // const onSubmit = useCallback(
  //   (data) => {
  //     formMutation.mutate(data);
  //   },
  //   [formMutation]
  // );

  // const formMutation = useMutation({
  //   mutationFn: postFormData,
  //   onSuccess: (data) => {
  //     console.log('Wszystko poszło ok:', data);
  //   },
  //   onError: (error) => {
  //     console.error('Cos poszło nie tak', error);
  //   },
  // });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
