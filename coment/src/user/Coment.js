import React, { useState, useEffect } from "react";
import firebase from "../firebase";

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

const useDatabasePush = (endpoint) => {
  const [status, setStatus] = useState("");

  const save = (data) => {
    const ref = firebase.database().ref(endpoint);
    ref.push(data, (err) => {
      if (err) {
        setStatus("ERROR");
      } else {
        setStatus("SUCESS");
      }
    });
  };

  return [status, save];
};

const Comment = ({ comment }) => {
  return <div>{comment.content} by: Moisés</div>;
};

const Coment = () => {
  const data = useDatabase("coments");
  if (!data) {
    return <p>NO COMMENTS HERE</p>;
  }
  const ids = Object.keys(data);
  if (ids.length === 0) {
    return <p>Loading...</p>;
  }
  return ids.map((id) => {
    return <Comment key={id} comment={data[id]} />;
  }, []);
};

function Coments() {
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
        <Coment />
      </div>
    </div>
  );
}

export default Coments;
