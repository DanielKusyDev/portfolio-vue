<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>

import {mapActions} from "vuex";

export default {
  methods: mapActions(["fetchOverview"]),
  created() {
    this.fetchOverview();
  },
}
</script>
<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  background-color: #f5f5f5!important;
}
html * {
  font-family: "Poppins", sans-serif;
}
</style>
