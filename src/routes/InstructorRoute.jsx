import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { SpinnerDotted } from "spinners-react";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className="m-8"><SpinnerDotted size={90} thickness={180} speed={229} color="#ff0000" secondaryColor="#00ff00"/></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default InstructorRoute;