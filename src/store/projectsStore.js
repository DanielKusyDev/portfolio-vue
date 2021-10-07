import api from "@/services/projectsService";

const state = {
    projects: {},
    project: {},
}

const getters = {
    projects(state){
        return state.projects;
    },
}

const actions = {
    async fetchProjects({commit}) {
        const projects = await api.getAll();
        await commit("SET_PROJECTS_LIST", projects);
    },
}

const mutations = {
    SET_PROJECTS_LIST(state, projects) {
        state.projects = projects;
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
