<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-primary"
  >
    <div class="row justify-center q-pt-lg q-mb-xs">
      <div class="col-xs-8 col-4 col-xl-4">
        <q-img
          basic
          src="statics/app-logo5.png"
        ></q-img>
      </div>
    </div>
    <div class="row justify-center">
      <div class="text-h6 col text-center text-white">Start using Progress Tracker </div>
    </div>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
<style>
</style>