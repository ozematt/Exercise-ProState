export const loggerMiddleware = (store) => (next) => (action) => {
  console.log(' dispaching: ', action);
  console.log('current state', store.getState());
  const nextActionResult = next(action);
  console.log('next state:', store.getState());
  return nextActionResult;
};
