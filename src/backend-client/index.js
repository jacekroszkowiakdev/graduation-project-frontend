import axios from "./axios";
// import axios from "axios";

class BackendClient {
    baseUrl = "http://localhost:3004";

    login(user, password) {
        return axios.post(`${this.baseUrl}/login`, (user, password));
    }

    logout(user, password) {
        return axios.post(`${this.baseUrl}/logout`, (user, password));
    }

    loadProducts() {
        return axios.get(`${this.baseUrl}/api/product/list`);
    }

    getProductDetail(id) {
        return axios.get(`${this.baseUrl}/api/product/${id}`);
    }

    sendShippingAddress(userInputs) {
        return axios.post(
            `${this.baseUrl}/api/order/placesetRecipentAddress`,
            userInputs
        );
    }
}
export default BackendClient;
