import axios from 'axios';

let port = 8082;
let host = '://localhost:' + port;
let baseURL = 'http' + host;

let axioxConf = {
  baseURL,
  timeout: 1000
};

let axiosInstance = axios.create(axioxConf);

export default {
  getAxios:axiosInstance,
  getCancelToken:axios.CancelToken
}
