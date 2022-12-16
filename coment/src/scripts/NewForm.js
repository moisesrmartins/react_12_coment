import React, { useState } from "react";
import useDatabasePush from "../scripts/useDatabasePush";
import firebase from "../firebase";

const NewForm = (props) => {
  const [, save] = useDatabasePush("Form");
  const [form, setForm] = useState("");
  const createForm = () => {
    if (form !== "") {
      save({
        content: form,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: "1", name: "Moisés" },
      });
      console.log(form);
      setForm("");
    }
  };

  return (
    <div>
      <textarea value={form} onChange={(evt) => setForm(evt.target.value)} />
      <br />
      <button onClick={createForm}>Form</button>
    </div>
  );
};

export default NewForm;
