import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import projects from "./projectsStore";
import personalInfo from "./personalInfoStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projects,
    personalInfo
  },
  plugins: [createPersistedState()],
});
