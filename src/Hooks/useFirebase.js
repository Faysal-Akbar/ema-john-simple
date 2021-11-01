import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        
    }
    const logOut = () => {
        signOut(auth)
        .then( ()=> {
            setUser({});
        })
    }
    useEffect( ()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;