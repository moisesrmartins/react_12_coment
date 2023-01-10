import React from "react";
import Test from "./user/Test";
import Coments from "./user/Coment";
import Form from "./user/Form";
import { AuthProvider } from "./server/auth";
import firebase from "./server/firebase";

const ref = firebase.database().ref("test");
ref.on("value", (snapshot) => {
  console.log(snapshot.val());
});

function App() {
  return (
    <AuthProvider>
      <div>
        <Test />
        <br />
        <Coments />
        <br />
        <Form />
      </div>
    </AuthProvider>
  );
}

export default App;
