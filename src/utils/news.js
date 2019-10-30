import axios from 'axios';

const apiKey = `YOUR API KEY HERE`;
export default axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
});
