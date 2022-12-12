import React, { useState } from "react";
import firebase from "./firebase";

function App() {
  const [data, setData] = useState({});
  const ref = firebase.database().ref("test");
  ref.on("value", (snapshot) => {
    console.log(snapshot.val());

    setData(snapshot.val());
  });

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
