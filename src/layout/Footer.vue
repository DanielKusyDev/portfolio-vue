<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li class="nav-item" v-for="media in socialMedia.results" :key="media.name">
            <a class="nav-link" :href="media.url">
              <b-img class="social" :src="media.icon"></b-img>
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed and coded by
        <a :href="`mailto:${overview.info.email}`" target="_blank" rel="noopener"
          >{{ overview.info.first_name }}<span v-if="overview.info.last_name"> {{overview.info.last_name}}</span></a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    ...mapGetters(["socialMedia", "overview"])
  },
  methods: {
    ...mapActions(["fetchSocialMedia"]),
  },
  async created() {
    await this.fetchSocialMedia();
  }
};
</script>


<style>
.social {
  max-width: 32px;
}

.footer {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  background-color: #ebebeb ;
}

</style>
