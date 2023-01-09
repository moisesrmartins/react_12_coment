import React from "react";
import Test from "./user/Test";
import Coments from "./user/Coment";
import Form from "./user/Form";
import { AuthContext } from "./user/auth";

function App() {
  return (
    <AuthContext.Provider value={""}>
      <div>
        <Test />
        <br />
        <Coments />
        <br />
        <Form />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
