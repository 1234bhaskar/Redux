import React from "react";
import Home from "./Home";
import { useSelector } from "react-redux";
const App = () => {
  const { c } = useSelector((state) => state.custom);
  return (
    <div>
      <h1>{c}</h1>
      <Home />
    </div>
  );
};

export default App;
