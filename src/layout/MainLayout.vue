<template>
  <div>
    <Navbar/>
    <div>
      <router-view/>
    </div>
    <Footer style="margin-top: 20vh"/>
  </div>
</template>

<script>
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export default {
  components: {Navbar, Footer}
}
</script>
