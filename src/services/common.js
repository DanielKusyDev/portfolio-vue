import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://dkusy-portfolio-admin.azurewebsites.net/",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;