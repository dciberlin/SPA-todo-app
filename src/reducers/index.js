import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const initialState = JSON.parse(localStorage.getItem('spa-todo-app')) || [];

const todoReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO') {
    const newItem = { id: new Date(), text: action.payload, done: false };
    const items = [...state, newItem];
    localStorage.setItem('spa-todo-app', JSON.stringify(items));
    return items;
  }

  if (action.type === 'UPDATE_TODO') {
    const items = state.map(item => {
      if (item.id === action.payload) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    localStorage.setItem('spa-todo-app', JSON.stringify(items));
    return items;
  }

  return initialState;
};

export default combineReducers({
  todos: todoReducer,
  news: newsReducer
});
