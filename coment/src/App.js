import React from "react";
import Test from "./user/Test";
import Coments from "./user/Coment";
import Form from "./user/Form";
import { AuthProvider } from "./server/auth";
import CreateUser from "./server/CreateUser";

function App() {
  return (
    <AuthProvider>
      <div>
        <Test />
        <br />
        <Coments />
        <br />
        <Form />
        <br />
        <CreateUser />
      </div>
    </AuthProvider>
  );
}

export default App;
