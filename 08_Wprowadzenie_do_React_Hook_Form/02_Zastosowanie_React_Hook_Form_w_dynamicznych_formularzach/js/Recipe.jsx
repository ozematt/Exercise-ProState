import { useForm, useFieldArray, Controller } from 'react-hook-form';

export const Recipe = () => {
  // added defaultValues
  const { register, handleSubmit, control } = useForm({
    defaultValue: {
      recipeName: '',
      servings: '',
      description: '',
      ingredients: [{ name: '' }],
    },
  });
  //defined controlled field
  const { fields, append, remove } = useFieldArray({ control, name: 'ingredients' });
  //on Submit function
  const onSubmit = (data) => console.log(data);
  //UI
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
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: '10px' }}>
            <Controller
              name={`ingredients[${index}].name`}
              control={control}
              defaultValue={field?.name}
              render={({ field }) => <input {...field} placeholder={`Ingredient Name ${index + 1}`} />}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '' })}>
          Add Ingredient
        </button>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
