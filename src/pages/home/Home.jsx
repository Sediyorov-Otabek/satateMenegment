import React, { createContext } from "react";
import Child from "./Child";

export const Context = createContext();

const Home = () => {
  let text = "hello world";
  let son = 15;
  return (
    <div>
      <h2 className="text-center text-4xl">Home</h2>
      <Context.Provider value={{ text, son }}>
        <Child />
      </Context.Provider>
    </div>
  );
};

export default Home;
