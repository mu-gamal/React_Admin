import Axios from 'axios';

class ApiService {
  constructor() {
    const server = '';
    this.client = Axios.create({baseURL: server});

    this.client.interceptors.response.use(
      (config) => {
        // console.log('Response', config);
        return config;
      },
      async (error) => {
        // console.log('Error', error.response);
        return Promise.reject(error.response || error.message);
      }
    );
  }

  setToken(token) {
    if (token) {
      this.client.defaults.headers.common = {Authorization: token};
    } else {
      delete this.client.defaults.headers.common.Authorization;
    }
  }

  makeRequest(method, url, params = {}) {
    return this.client[method](url, params)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  }

  getData(type, params) {
    return this.makeRequest('get', type, params);
  }

  postData(type, params) {
    return this.makeRequest('post', type, params);
  }

  updateData(type, params) {
    return this.makeRequest('put', type, params);
  }

  deleteData(type, params) {
    return this.makeRequest('delete', type, params);
  }
}

export default ApiService = new ApiService();
