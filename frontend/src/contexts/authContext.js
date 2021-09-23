import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import * as firebase from "../firebase";
import useUpdateUserName from "../hooks/updateUserData";
import { NavItem } from "react-bootstrap";
// backend\functions\utils\firebase.js
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const { mutate } = useUpdateUserName();

  const register = async (email, password, userName) => {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password)
      const getCurrentUser = auth.currentUser;
      // console.log(getCurrentUser)
      await getCurrentUser.updateProfile({
        displayName: userName,
      });
      await auth.signOut()
      await auth.signInWithEmailAndPassword(email, password)
      console.log(getCurrentUser)
      return user;
    } catch (error) {}
  };

  const login = async (email, password) => {
    const response = await auth.signInWithEmailAndPassword(email, password);
    return response.user;
  };
  const logout = () => {
    return auth.signOut();
  };

  const sendPasswordReset = async (email) => {
    const response = await auth
      .sendPasswordResetEmail(email)
      .then(() => alert("Nuoroda išsiųsta į nurodytą el. paštą"))
      .catch((error) => alert("Vartotojas nurodytu el. paštu neegzsistuoja", error.message));
    return response;
    
  };

  const updateEmail = async (email) => {
    const respone = await currentUser.updateEmail(email);
  };

  const updateProfile = async (name) => {
    const response = await currentUser.updateProfile({
      displayName: name,
    });
  };

  // const updateProfile = async (name) =>{
  //   const respone = await currentUser.updateProfile(name)
  // }

  const updatePassword = async (password) => {
    const respone = await currentUser.updatePassword(password);
  };

  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // }

  const handleStateChange = async (user) => {
    let admin = false;
    if (user) {
      const token = await user.getIdTokenResult();
      admin = token.claims.admin ? true : false;
    }
    setCurrentUser(user);
    setIsAdmin(admin);
    setLoading(false);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleStateChange);
    return () => unsubscribe();
  }, []);

  // useEffect (() =>{
  //     const unsubscribe = auth.onAuthStateChanged(user =>{
  //         setCurrentUser(user)

  //         setLoading(false)
  //     })
  //     return unsubscribe
  // },[])

  // const handleStateChange = async (user) => {
  //     console.log(user)
  //     if (user){
  //         setCurrentUser(user)
  //         setLoading(false)
  //     }
  // }

  // useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged(handleStateChange)
  //     return unsubscribe
  // },[])

  const value = {
    register,
    login,
    logout,
    sendPasswordReset,
    updateEmail,
    updatePassword,
    updateProfile,
    // signInWithGoogle,
    currentUser,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
