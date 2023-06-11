import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;