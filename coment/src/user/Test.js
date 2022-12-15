import React, { useState } from "react";
import useDatabase from "../scripts/useDatabase";
import useDatabasePush from "../scripts/useDatabasePush";
import useDatabasePush2 from "../scripts/useDatabasePush2";

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

function Test() {
  const [visible, toggle] = useState(false);
  const [status, save] = useDatabasePush("test/status/status1");

  const [visible2, toggle2] = useState(false);
  const [status2, save2] = useDatabasePush2("test/status/status2");

  return (
    <div>
      <div>
        <p>Status:{status}</p>
        <button
          onClick={() => {
            toggle(!visible);
            save({ a: 1 });
          }}
        >
          Test/a
        </button>
        {visible && <Coment />}
      </div>
      <div>
        <p>Status:{status2}</p>
        <button
          onClick={() => {
            toggle2(!visible2);
            save2({ b: 2 });
          }}
        >
          Test/b
        </button>
        {visible2 && <Coment2 />}
      </div>
    </div>
  );
}

export default Test;
