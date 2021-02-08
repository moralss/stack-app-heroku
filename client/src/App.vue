<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import { GlobalMixin } from './mixins/globalMixins'

import firebase from '@firebase/app'
import { config } from './firebase/config'

require('firebase/messaging')
require('firebase/firestore')
require('firebase/auth')
require('firebase/storage')

const firebaseApp = firebase.initializeApp(config)

Vue.mixin(GlobalMixin)
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    isAuth () {
      return this.$store.getters.isAuthenticated
    },
    isSystemAuthenticated () {
      return this.$store.getters.isSystemAuthenticated
    },
  },
  created () {
    console.log("authenticated", this.isSystemAuthenticated)
    this.$fireAuth.onAuthStateChanged(user => {
      if (!user) {
        if (this.$route.name !== 'action') {
          this.$store.dispatch('logoutUser')
          if (this.$route.name !== 'login') {
            this.$router.replace('/login')
          }
          this.$store.dispatch('logout')
        }
      } else {
        if (!user.displayName && this.$store.getters.name) {
          user.updateProfile({
            displayName: this.$store.getters.name
          }).then(() => {
            this.login(user)
          })
        } else {
          this.login(user)
        }
      }
    })
  },
  methods: {
    login (user) {
      user.getIdToken(true).then(token => {
        this.$store.dispatch('setFirebaseToken', token)
        if (!this.isAuth) {
          this.$store.dispatch('login', {
            uid: user.uid,
            emailVerified: user.emailVerified,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName
          })
        }

        if (!this.isSystemAuthenticated) {
          return this.$store.dispatch('authenticate').then(res => {
            this.$router.replace('/')
          })
        }
      })
    },
  },
  beforeCreate () {
    Vue.prototype.$db = firebaseApp.firestore()
    Vue.prototype.$fireAuth = firebaseApp.auth()
    Vue.prototype.$storage = firebaseApp.storage()
    Vue.prototype.$firebase = firebase
    // console.log('firebaseApp', firebaseApp.auth())
  }
}
</script>
