<template>
  <NavbarComponent
      class="top"
      type="transparent"
      menu-classes="ml-auto"
      position="relative"
  >
    <b-navbar-brand class="navbar-brand" to="/">
      <b-img id="logo" :src="overview.info.logo" v-if="overview.info.logo"/>
      <font-awesome-icon icon="home" size="3x" v-else/>
    </b-navbar-brand>
  </NavbarComponent>
</template>

<script>
import NavbarComponent from "@/components/Navbars/NavbarComponent";
import {mapGetters} from "vuex";

export default {
  name: "Navbar",
  components: {NavbarComponent},
  computed: mapGetters(["overview"]),
}
</script>

<style>
#logo {
  max-width: 100px;
  max-height: 40px !important;
}

nav a {
  color: unset !important;
  height: 50px;
}
</style>