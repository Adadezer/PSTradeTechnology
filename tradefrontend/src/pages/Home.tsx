import React, { useContext } from "react";

import TradeContext from "../context/TradeContext";

function Home() {
  const { apiKey } = useContext(TradeContext);
  return (
    <>
      <h1>Home</h1>
      <h2>{apiKey}</h2>;
    </>
  );
}

export default Home;
