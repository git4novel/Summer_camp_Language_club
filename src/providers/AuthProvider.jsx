import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth,  onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
export const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // fake data 
    // const [admin, setAdmin] = useState(admin)

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data=>{
                    // console.log(data);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () =>{
           return unsubscribe();
        }
    },[])

    // logout firebase function
    const logOut = () =>{
        signOut(auth).then().catch((error) => console.log(error))
    }

    const authInfo = {
        user, setUser, setLoading, loading, logOut, updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;