import axios from 'axios';

const api = axios.create({
  //Localhost deve ser o ip do wifi
  // -> $ipconfig
  baseURL: 'http://localhost:8888'
})

export default api