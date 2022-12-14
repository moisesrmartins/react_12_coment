import { useState } from "react";
import firebase from "../server/firebase";

const useDatabasePush2 = (endpoint) => {
  const [status2, setStatus2] = useState("");

  const save2 = (data) => {
    const ref = firebase.database().ref(endpoint);
    ref.push(data, (err) => {
      if (err) {
        setStatus2("ERROR");
      } else {
        setStatus2("SUCCESS");
      }
    });
  };

  return [status2, save2];
};

export default useDatabasePush2;
