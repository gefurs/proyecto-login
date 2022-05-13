import { Navigate } from "react-router-dom";

const ProtectedRoute = ({user, children}) => {
    return (
        <>
            {!user ? <Navigate to="/login" replace /> : children}
        </>
        
    );
    
    
    
    
    // if(!user) {
    //     return <Navigate to="/login" replace />
    // }
    // return children;
}

export default ProtectedRoute;

