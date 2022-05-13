import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const urlApi = "http://localhost:3001/users";

const expressions = {
    username: /^[a-zA-Z0-9_-]{4,16}$/,
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const Login = ({setUser}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [jwt, setJwt] = useState("");
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password);

        if(validation(username, password)) {
            const credentials = {
                username,
                password
            }
            const jwt = request(credentials);
            
            if(jwt){
                setUser(true);
            navigate("/");
            }
            console.log(jwt);
        }
    }

    const request = async(credentials) => {

        const jwt = await axios.post(urlApi, credentials)
            .then((data) => localStorage.setItem("token", data.token));
            return jwt;
    }


    const validation = (username, password) => {
        if(username.length === 0 || password.length === 0) {
            alert("Por favor, ingrese un usuario y una contraseña.");
        } else if(!expressions.username.test(username)) {
            alert("Por favor ingrese un usuario válido.")
        } else if(!expressions.password.test(password)) {
            alert("Por favor ingrese una contraseña válida.");
        } else {
            console.log("datos validados");
            return true;
        }
    }

    return(
        <>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="usuario" state={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="contraseña" state={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;