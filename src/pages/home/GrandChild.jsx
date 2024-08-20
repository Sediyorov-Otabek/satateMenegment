import React, { useContext } from "react";
// import { Context } from "./Home";

const GrandChild = () => {
  const data = useContext(Context);
  return (
    <div>
      <h3 className="text-2xl">GrandChild</h3>
      <p>{data.son}</p>
      <b>{data.text}</b>
    </div>
  );
};

export default GrandChild;
