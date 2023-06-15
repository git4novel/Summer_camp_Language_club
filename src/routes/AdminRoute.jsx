import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { SpinnerRoundFilled } from "spinners-react";
import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user,loading, adminLoading} = useContext(AuthContext);
    const location = useLocation();

    // const [isAdmin] = useAdmin()
    if(loading || adminLoading){
        return <div className="m-8"><SpinnerRoundFilled size={90} thickness={180} speed={199} color="#ff0000" secondaryColor="#00ff00"/></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} status={{from: location}} replace></Navigate>
};

export default AdminRoute;