import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../services/validateService";
import request from "../services/loginService";

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