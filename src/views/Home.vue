<template>
  <div>
    <b-container fluid class="paddedSection text-center">
      <p id="mainTitle">{{ overview.info.main_title }}</p>
      <p id="mainSubTitle">{{ overview.info.sub_title }}</p>
      <b-img center class="mr-auto image"
             :src="avatar()"
             rounded="circle"
             width="200"
             height="200"
      />
      <b-img center
             class="image"
             height="500"
             src="https://content.gnoss.ws/imagenes/Usuarios/ImagenesCKEditor/989fc5b2-d0cc-419e-befa-c575b97b9160/c6699bd3-3658-4705-b70a-75bbd88a9f7f.png"
      />
    </b-container>
    <IntroSection/>
    <HeaderDivider title="Projects" :color="`#${overview.info.theme_color}`"/>
    <Gallery class="niche" :items="getProjects()"/>
  </div>


</template>
<script>
import Gallery from "@/components/Gallery"
import IntroSection from "@/views/IntroSection";
import {mapActions, mapGetters} from "vuex";
import HeaderDivider from "@/components/HeaderDivider";


export default {
  name: "Home",
  components: {IntroSection, Gallery, HeaderDivider},
  methods: {
    ...mapActions(["fetchProjects"]),
    getProjects() {
      return this.projects.results.map(function (project) {
        return {
          name: project.name,
          text: project.short_description,
          img: project.thumbnail,
          path: {name: 'projectDetails', params: {'name': project.name}},
        }
      })
    },
    avatar() {
      if(this.overview.info.avatar) {
        return this.overview.info.avatar;
      }
      return "https://rockfit.pl/img/person-flat.png";
    },
  },
  computed: {
    ...mapGetters(["projects", "overview"]),
  },
  mounted() {
    this.fetchProjects();
  }
}
</script>


<style>
#mainTitle {
  font-weight: bold;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
}

#mainSubTitle {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}

.image {
  margin-top: 5vh;
}

.paddedSection {
  width: 70%;
  margin-top: 10vh;
}

</style>
