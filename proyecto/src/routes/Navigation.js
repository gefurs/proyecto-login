import { Outlet, Link } from "react-router-dom";
import Logout from "../session/Logout";

const Navigation = ({setUser}) => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/faq'>FAQ</Link>
                <Outlet />
            </nav>
            <div>
                <Logout setUser = {setUser} />
            </div>
        </>
    )
    
}

export default Navigation;
