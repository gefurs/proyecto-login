import { useNavigate } from "react-router-dom";

const Logout = ({setUser}) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        setUser(false);
        navigate("/login");
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;