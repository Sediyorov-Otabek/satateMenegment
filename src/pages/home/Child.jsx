import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { Context } from "./Home";

const Child = ({ text }) => {
  const data = useContext(Context);
  return (
    <div>
      <h2 className="text-3xl">Child</h2>
      <p>{data.son}</p>
      <b>{data.text}</b>
      <GrandChild matn={text} />
    </div>
  );
};

export default Child;
