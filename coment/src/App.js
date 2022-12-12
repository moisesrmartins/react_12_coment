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

const Coment = ({ visible }) => {
  const endpoint = visible ? "test" : "test/a";
  const data = useDatabase(endpoint);
  return <pre>{JSON.stringify(data)}</pre>;
};

const Coment2 = ({ visible }) => {
  const endpoint = visible ? "test" : "test/b";
  const data2 = useDatabase(endpoint);
  return <pre>{JSON.stringify(data2)}</pre>;
};

function App() {
  const [visible, toggle] = useState(false);
  const [visible2, toggle2] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => toggle(!visible)}>Test/a</button>
        {visible && <Coment />}
      </div>
      <br />
      <div>
        <button onClick={() => toggle2(!visible2)}>Test/b</button>
        {visible2 && <Coment2 />}
      </div>
    </div>
  );
}

export default App;
