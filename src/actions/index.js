export const addTodo = payload => {
  return {
    type: 'ADD_TODO',
    payload: payload
  };
};

export const updateTodo = payload => {
  return {
    type: 'UPDATE_TODO',
    payload: payload
  };
};
