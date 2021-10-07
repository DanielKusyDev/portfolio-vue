import api from "@/services/personalInfoService";

const state = {
    socialMedia: {},
    settings: {},
    bullets: [],
}

const getters = {
    overview(state){
        return {
            bullets: state.bullets,
            info: state.settings,
        };
    },
    socialMedia(state) {
        return state.socialMedia;
    }
}

const actions = {
    async fetchOverview({commit}) {
        await commit("SET_WEBSITE_SETTINGS", await api.getWebsiteInfo());
        await commit("SET_BULLETS", await api.getBullets());
    },
    async fetchSocialMedia({commit}) {
        await commit("SET_SOCIAL_MEDIA", await api.getSocialMedia());
    }
}

const mutations = {
    SET_SOCIAL_MEDIA(state, social_media) {
        state.socialMedia = social_media;
    },
    SET_WEBSITE_SETTINGS(state, settings) {
        state.settings = settings;
    },
    SET_BULLETS(state, bullets) {
        state.bullets = bullets;
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}
