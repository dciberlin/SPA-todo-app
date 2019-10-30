import news from '../utils/news';

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

export const fetchNews = () => async dispatch => {
  const response = await news.get();
  dispatch({
    type: 'FETCH_NEWS',
    payload: response.data.articles
  });
};
