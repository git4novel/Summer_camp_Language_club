import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { SpinnerRoundFilled } from "spinners-react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user,admin, loading, adminLoading} = useContext(AuthContext);
    const location = useLocation();

    if(loading || adminLoading){
        return <div className="m-8"><SpinnerRoundFilled size={90} thickness={180} speed={199} color="#ff0000" secondaryColor="#00ff00"/></div>
    }
    if(user && admin){
        return children;
    }
    return <Navigate to={'/login'} status={{from: location}}></Navigate>
};

export default AdminRoute;