import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { SpinnerRoundFilled } from "spinners-react";

const AdminRoute = ({children}) => {
    const {user, loading, adminLoading} = useContext(AuthContext);
    if(loading){
        return <div className="m-8"><SpinnerRoundFilled size={90} thickness={180} speed={199} color="#ff0000" secondaryColor="#00ff00"/></div>
    }
};

export default AdminRoute;