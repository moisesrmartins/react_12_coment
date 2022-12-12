import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const Coments = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const ref = firebase.database().ref("test");
    ref.on("value", (snapshot) => {
      setData(snapshot.val());
    });
    return () => {
      ref.off();
    };
  }, []);
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
