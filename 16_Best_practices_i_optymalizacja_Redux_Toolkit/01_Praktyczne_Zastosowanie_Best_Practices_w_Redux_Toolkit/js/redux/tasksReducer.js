function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'tasks/removeTask':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'tasks/toggleTask':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload ? { ...task, completed: !task.completed } : task)),
      };
    default:
      return state;
  }
}

export default tasksReducer;
