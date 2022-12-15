import React from "react";
import useDatabase from "../scripts/useDatabase";
import useDatabasePush from "../scripts/useDatabasePush";

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
