import api from "@/services/common";

export default {
    async getAll() {
        const response = await api.get("projects/");
        return response.data;
    },
    async fetchTechnologies(project_id) {
        const response = await api.get("projects/technologies/?project=" + project_id);
        return response.data;
    }
}