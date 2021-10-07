<template>
  <div>
    <HeaderDivider
        :title="project.name"
        :color="`#${overview.info.theme_color}`"
    />
    <b-container class="niche">
      <b-card>
        <b-img :src="project.thumbnail"/>
      </b-card>
    </b-container>

    <b-container v-if="technologies.count > 0" id="technologies">
      <h3>Technologies</h3>
      <ul>
        <li v-for="technology in technologies.results" :key="technology.name">
          <b-img :src="technology.icon"/>
        </li>
      </ul>
    </b-container>
    <b-container>
      <b-btn variant="primary" v-if="project.url !== null" :href="project.url"> Live demo</b-btn>
      <b-btn variant="primary" v-if="project.code_url !== null" :href="project.code_url"> Codebase</b-btn>
      <section>
        <vue-markdown>{{ project.description }}</vue-markdown>
      </section>
    </b-container>

  </div>
</template>

<script>

import {mapGetters} from "vuex";
import HeaderDivider from "@/components/HeaderDivider";
import apis from "@/services/projectsService";

export default {
  name: "ProjectPage",
  components: {HeaderDivider},
  data() {
    return {
      sections: [],
      technologies: [],
    }
  },
  computed: {
    ...mapGetters(["projects", "overview"]),
    project() {
      for (let i = 0; i < this.projects.results.length; i++) {
        const project = this.projects.results[i];
        if (project.name === this.$route.params.name) {
          return project;
        }
      }
      return {};
    },
  },
  async created() {
    this.technologies = await apis.fetchTechnologies(this.project.id);
  }
}
</script>
<style scoped>
img {
  object-fit: cover;
  max-height: 40vh;
  width: 100%;
}

ul {
  display: -webkit-box;
  display: flex;
  list-style: none outside none;
  flex-wrap: wrap;
}

li {
  min-width: 100px;
  text-align: center;
  margin: 0 1vw 2vh 0;
}

ul li img {
  max-width: 90px;
  height: 50px;
  vertical-align: bottom;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  object-fit: contain;
}

</style>
