import axios from "axios";

const urlApi = "http://localhost:3001/users";

const request = async(credentials) => {
    
    const jwt = await axios.get(urlApi, credentials)
    // .then((response) => localStorage.setItem("token", response.token));
    .then(response => console.log(response.data));
    return jwt;
}

export default request;