import React, { useEffect, useState } from "react";
import firebase from "./firebase";

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

const useCreateUser = () => {
  const [state, setState] = useState({
    error: "",
    success: "",
  });
  const createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          setState({
            ...state,
            success: "OK",
          });
        }
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
        });
      });
  };
  return [state, createUser];
};

export const AuthProvider = ({ children }) => {
  const user = useGetUser;
  const [createUserState, createUser] = useCreateUser();
  return (
    <AuthContext.Provider
      value={{
        user,
        createUser: {
          createUserState,
          createUser,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
