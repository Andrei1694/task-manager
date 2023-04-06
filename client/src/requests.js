import axios from "axios";

export const login = async (loginData) => {
    return axios.post("http://localhost:3000/users/login", loginData);
};