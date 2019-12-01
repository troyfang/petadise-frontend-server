import axios from 'axios'

// axios config
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'https://petadise-test.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default axios
