import { useState } from "react";

import TradeContext from "./TradeContext";

export default function InputsProvider({ children }: any) {
  const [apiKey, setApiKey] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [disabledLeague, setDisabledLeague] = useState<boolean>(true);
  const [disabledTeam, setDisabledTeam] = useState<boolean>(true);

  const myContext = {
    apiKey,
    setApiKey,
    country,
    setCountry,
    disabledLeague,
    setDisabledLeague,
    disabledTeam,
    setDisabledTeam,
  };

  return (
    <TradeContext.Provider value={myContext}>{children}</TradeContext.Provider>
  );
}
