import React from "react";
import useDatabase from "../scripts/useDatabase";
import NewForm from "../scripts/NewForm";
import Time from "../scripts/Time";

const Former = ({ form }) => {
  return (
    <div>
      {form.content} by: {form.user.name} at <Time timestamp={form.createdAt} />
    </div>
  );
};

const Forms = () => {
  const data = useDatabase("Form");
  if (!data) {
    return <p>NOTHING HERE</p>;
  }
  const ids = Object.keys(data);
  if (ids.length === 0) {
    return <p>Loading...</p>;
  }
  return ids.map((id) => {
    return <Former key={id} form={data[id]} />;
  });
};

function Form() {
  return (
    <div>
      <NewForm />
      <br />
      <Forms />
    </div>
  );
}

export default Form;
