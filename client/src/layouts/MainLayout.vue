<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Progress Tracker
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            label="logout"
            @click="logout()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; color:black; border-right: 1px solid #ddd;">
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
          </q-item-label>
          <q-item
            @click="changePage('viewer')"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon
                color="primary"
                name="bluetooth"
              />
            </q-item-section>

            <q-item-section>objective viewer</q-item-section>
          </q-item>
          <q-item
            @click="changePage('setup')"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon
                color="primary"
                name="bluetooth"
              />
            </q-item-section>

            <q-item-section>setup</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="56px"
            class="q-mb-sm"
          >
            <img :src="user.photoURL" />
          </q-avatar>
          <div class="text-weight-bold">{{user.displayName}}</div>
          <div>{{user.email}}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    changePage (pageName) {
      this.$router.replace(pageName)
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    }
  }
}
</script>
