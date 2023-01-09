import React from "react";
import Test from "./user/Test";
import Coments from "./user/Coment";
import Form from "./user/Form";
import { AuthProvider } from "./user/auth";

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
