import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:8080/v1/goal',
  headers: { authToken: localStorage.getItem('AuthToken') },
});

export { app };
