import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:3030/auth',
});

export { app };
