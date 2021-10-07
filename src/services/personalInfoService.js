import api from "@/services/common";

export default {
    async getSocialMedia() {
        const response = await api.get("info/social_media/");
        return response.data;
    },
    async getWebsiteInfo() {
        const response = await api.get("info/settings/");
        return response.data;
    },
    async getBullets() {
        const response = await api.get("info/my_bullets/");
        return response.data;
    },
}