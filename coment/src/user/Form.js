import React from "react";
import useDatabase from "../scripts/useDatabase";
import useDatabasePush from "../scripts/useDatabasePush";

const Former = ({ form }) => {
  return (
    <div>
      {form.content} by: {form.user.name}
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
  const [, save] = useDatabasePush("coments");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            save({
              content: "First Comment",
            });
          }}
        >
          Coments
        </button>
        <Forms />
      </div>
    </div>
  );
}

export default Form;
