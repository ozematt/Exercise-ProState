export const Recipe = () => {
  return (
    <form>
      <h2>Add recipe</h2>
      <div>
        <label htmlFor="recipeName">Name</label>
        <input type="text" id="recipeName" name="recipeName" />
      </div>

      <div>
        <label htmlFor="servings">Servings</label>
        <input type="number" id="servings" name="servings" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>
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
