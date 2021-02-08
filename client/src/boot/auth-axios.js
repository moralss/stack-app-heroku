import axios from 'axios'
import store from '../store'

var instance = axios.create({
  baseURL: 'http://localhost:5000/api'
})

instance.defaults.headers.get.Accepts = 'application/json'

function setup () {
  instance.interceptors.request.use(function (config) {
    const firebaseToken = store.getters.firebaseToken
    console.log(`Bearer "welcome"`, firebaseToken)
    if (firebaseToken) {
      config.headers.Authorization = `Bearer ${firebaseToken}`
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  instance.interceptors.response.use(function (response) {
    return response
  }, function (err) {
    return Promise.reject(err)
  })
}

export default async ({
  Vue
}) => {
  setup()
  Vue.prototype.$authAxios = instance
}
