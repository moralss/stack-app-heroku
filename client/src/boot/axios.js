import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers.get.Accepts = 'application/json'

function setup () {
  axios.interceptors.request.use(function (config) {
    const token = store.getters.userToken
    console.log("tokentokentokentokentoken", token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  axios.interceptors.response.use(function (response) {
    return response
  }, async function (error) {
    if (error.response && error.response.config && error.response.status === 401) {
      try {
        await store.dispatch('authenticate')
        error.config.headers.Authorization = store.state.accessToken
        setup()
        return axios.request(error.config)
      } catch (error) {
        await store.dispatch('logout')
        return Promise.reject(error)
      }
    } else {
      return Promise.reject(error)
    }
  })
}

export default async ({
  Vue
}) => {
  setup()
  Vue.prototype.$axios = axios
}
