import {
  createBrowserHistory
} from 'history';
import axios from 'axios'
const history = createBrowserHistory();

export default function initAxios() {
  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.interceptors.response.use((response) => {
      return response
  }, (err) => {
      if (err.response.status === '401') {
            localStorage.removeItem('token');
            history.push('/admin/login')
          }
      return Promise.reject(err)
  })
}
