import { useState } from "react";
import firebase from "../firebase";

const useDatabasePush = (endpoint) => {
  const [status, setStatus] = useState("");

  const save = (data) => {
    const ref = firebase.database().ref(endpoint);
    ref.push(data, (err) => {
      if (err) {
        setStatus("ERROR");
      } else {
        setStatus("SUCESS");
      }
    });
  };

  return [status, save];
};

export default useDatabasePush;
