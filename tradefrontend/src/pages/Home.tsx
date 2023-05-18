import React, { useContext } from "react";

import TradeContext from "../context/TradeContext";

function Home() {
  const { apiKey } = useContext(TradeContext);
  return <h1>{apiKey}</h1>;
}

export default Home;
