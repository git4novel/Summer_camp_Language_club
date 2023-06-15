import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom/dist";
import { SpinnerInfinity } from "spinners-react";
// import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
       return <div className="relative"><SpinnerInfinity className="absolute top-1/2 right-1/2 my-20" size={90} thickness={180} speed={229} color="#ff0000" secondaryColor="#00ff00" /></div>
    }
    if(user){
       return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

/* PrivateRoute.propTypes = {
   children: PropTypes.node.isRequired,
 };
  */

export default PrivateRoute;