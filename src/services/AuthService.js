import axios from "axios";

const API_URL = "http://localhost:5092/api/Home/login";

const login = (username,senha) => {
    // i need to token so, i get request and await response
    return axios
        .post(API_URL, {
            id: 0,
            nome: "string",
            email: username,
            senha: senha,
            role: "string"
        })
        // whille response do set in local storage my token
        .then((response) => {
          
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
// function global for remove user item
const logout = () => {
    localStorage.removeItem("user");
};
// get user exist
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
// export all functions
const AuthService = {
    login,
    logout,
    getCurrentUser,
};
export default AuthService;