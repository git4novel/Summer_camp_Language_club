import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom/dist";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
       return 
    }
    if(user){
        {children}
    }
    <Navigate to={'/login'} ></Navigate>
};

export default PrivateRoute;