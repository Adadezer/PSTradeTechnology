import { useState } from "react";

import TradeContext from "./TradeContext";

export default function InputsProvider({ children }: any) {
  const [apiKey, setApiKey] = useState<string>("");

  const myContext = {
    apiKey,
    setApiKey,
  };

  return (
    <TradeContext.Provider value={myContext}>{children}</TradeContext.Provider>
  );
}
