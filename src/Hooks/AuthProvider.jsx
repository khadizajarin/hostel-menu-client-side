import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.console";
import useAxiosPublic from "./useAxiosPublic";



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [locationState, setLocationState] = useState(null);

   

    //create user with google
    const provider = new GoogleAuthProvider();
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);   
    }

    //create user for register route
    const createUser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
          
            await user.updateProfile({
              displayName: name,
              photoURL: photoURL,
            });
            setLoading(false);
            console.log(user);
            return user;
          } catch (error) {
            setLoading(false);
            console.error(error);
          }
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
      

    //signIn user for login route
    const signIn = (email,password) => {
        setLoading();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo ={
        user,
        loading,
        setUser,
        createUser,
        signIn,
        createUserGoogle,
        logOut,
        locationState, 
        setLocationState,
        updateUserProfile
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;