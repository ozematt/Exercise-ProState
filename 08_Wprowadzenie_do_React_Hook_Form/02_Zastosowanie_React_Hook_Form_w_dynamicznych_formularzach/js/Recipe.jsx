import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { createLogger } from 'vite';

export const Recipe = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValue: {
      recipeName: '',
      servings: '',
      description: '',
      ingredients: [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'ingredients' });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add recipe</h2>
      <div>
        <label htmlFor="recipeName">Name</label>
        <input {...register('recipeName')} type="text" id="recipeName" name="recipeName" />
      </div>

      <div>
        <label htmlFor="servings">Servings</label>
        <input {...register('servings')} type="number" id="servings" name="servings" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea {...register('description')} id="description" name="description"></textarea>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <input type="text" id="ingredientName-1" name="ingredientName-1" />
        <input type="text" id="ingredientName-2" name="ingredientName-2" />
        <input type="text" id="ingredientName-3" name="ingredientName-3" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
