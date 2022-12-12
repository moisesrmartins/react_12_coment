import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const useDatabase = (endpoint) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const ref = firebase.database().ref(endpoint);
    ref.on("value", (snapshot) => {
      setData(snapshot.val());
    });
    return () => {
      ref.off();
    };
  }, [endpoint]);
  return data;
};

const Coments = () => {
  const data = useDatabase("test");
  return <pre>{JSON.stringify(data)}</pre>;
};

function App() {
  const [visible, toggle] = useState(false);

  return (
    <div>
      <button onClick={() => toggle(!visible)}>Press</button>
      {visible && <Coments />}
    </div>
  );
}

export default App;
