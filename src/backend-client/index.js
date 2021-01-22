// import axios from "./axios";
import axios from "axios";

class BackendClient {
    baseUrl = "http://localhost:3004";

    login(user, password) {
        //return axios.post(...)
    }

    logout() {
        //return axios.post()...
    }

    loadProducts() {
        return axios.get(`${this.baseUrl}/api/product/list`);
    }
}
export default BackendClient;
