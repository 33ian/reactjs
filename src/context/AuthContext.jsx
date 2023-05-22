import { createContext, useEffect, useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";



export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    console.log(user)

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))
    }

    const loginWithGoogle = () =>{
        signInWithPopup(auth, provider)
            .then((result)=>{
                console.log(result)
            })
    }

    const logout = () =>{
        signOut(auth)
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user)

            if(user){
                setUser({
                    email: user.email,
                    logged: true
                })
            } else{
                setUser({
                    email: null,
                    logged: false
                })
            }
        })
    }, [])

    return(
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}