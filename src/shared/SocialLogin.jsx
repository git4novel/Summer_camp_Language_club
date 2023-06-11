import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthContext, auth } from "../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {setUser, setLoading} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.pathname
    console.log(location);
    // const from = location.state?.pathname;


    const gProvider = new GoogleAuthProvider()
    const HandleGoogleLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, gProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <button onClick={HandleGoogleLogin} className="btn btn-outline">Login With <FcGoogle/></button>
    );
};

export default SocialLogin;