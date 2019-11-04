import axios from 'axios';

const apiKey = `f8d7869212c24907bc585db6b6d267be`;
export default axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
});
