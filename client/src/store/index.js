import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VueJwtDecode from 'vue-jwt-decode'

// import example from './module-example'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    user: null,
    token: null,
    firebaseToken: null,
    systemUser: null
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default new Vuex.Store({
  state: getDefaultState(),
  getters: {
    isAuthenticated (state) {
      return state.user != null
    },
    user (state) {
      return state.user
    },
    systemUserId (state) {
      return state.systemUser.id
    },
    userToken (state) {
      return state.token
    },
    firebaseToken (state) {
      return state.firebaseToken
    },
    isAuth () {
      return state.user != null
    },
    isSystemAuthenticated (state) {
      return state.token != null
    },
  },
  mutations: {
    login (state, data) {
      state.user = data.user
    },
    setToken (state, data) {
      state.token = data
    },
    setFirebaseToken (state, data) {
      state.firebaseToken = data.token
    },
    setSystemUser (state, token) {
      var data = VueJwtDecode.decode(token)
      state.token = token
      console.log("data", data, token)
      state.systemUser = data

    },
    logoutUser (state) {
      Object.assign(state, getDefaultState())
    },
    resetState (state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    authenticate ({
      commit
    }) {
      return Vue.prototype.$authAxios.get('auth')
        .then(res => {
          console.log("response", res)
          commit('setToken', res.data)
          commit('setSystemUser', res.data)
          return res
        })
        .catch(error => {
          console.log("error error error error", error)
          console.log(error.response)
          throw error
        })
    },
    setToken ({
      commit
    }, token) {
      commit('setToken', {
        token
      })
    },
    setFirebaseToken ({
      commit
    }, token) {
      commit('setFirebaseToken', {
        token
      })
    },
    login ({
      commit
    }, authData) {
      commit('login', {
        user: authData
      })
    },
    logout ({
      commit
    }) {
      commit('resetState')
    },
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING,
  plugins: [createPersistedState()]
})


