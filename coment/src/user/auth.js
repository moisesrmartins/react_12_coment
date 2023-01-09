import React, { useEffect, useState } from "react";
import firebase from "../firebase";

export const AuthContext = React.createContext();

const useGetUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  });
  return user;
};

export const AuthProvider = ({ children }) => {
  const user = useGetUser;
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
