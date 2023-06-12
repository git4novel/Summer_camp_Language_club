import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthContext, auth } from "../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {setUser, setLoading, updateUserProfile} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const gProvider = new GoogleAuthProvider()
    const HandleGoogleLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, gProvider)
        .then(result=>{
            const user = result.user;
            updateUserProfile(user.displayName, user.photoURL)
            console.log(user.displayName, user.photoURL);
            const saveUser = { name: user.displayName, email: user.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                    setUser(user)
                    navigate(from)  
              });
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